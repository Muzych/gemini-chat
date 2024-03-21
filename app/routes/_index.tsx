import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Content from "~/components/Content";
import { OpenAI } from 'openai';
import context from '~/context';
import { ActionFunctionArgs } from '@remix-run/node';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions';

export const meta: MetaFunction = () => {
  return [
    { title: "Gemini-Chat" },
    { name: "description", content: "Personal Assistant powerd by Gemini Pro" },
  ];
};

export interface ReturnedDataProps {
  message?: string;
  answer: string;
  error?: string;
  chatHistory: ChatCompletionMessageParam[];
}

export async function action({ request }: ActionFunctionArgs): Promise<ReturnedDataProps> {
  const body = await request.formData();
  const message = body.get('message') as string;
  const chatHistory = JSON.parse(body.get('chat-history') as string) || [];

  // store your key in .env
  const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: 'https://burn.hair/v1',
  });

  try {


      const chat = await openai.chat.completions.create({
          model: 'gpt-3.5-turbo',
          messages: [
              ...context,
              ...chatHistory,
              {
                  role: 'user',
                  content: message,
              },
          ],
      });

      const answer = chat.choices[0].message?.content;

      return {
          message: body.get('message') as string,
          answer: answer as string,
          chatHistory,
      };
  } catch (error: any) {
      return {
          message: body.get('message') as string,
          answer: '',
          error: error.message || 'Something went wrong! Please try again.',
          chatHistory,
      };
  }
}

export default function Index() {


  return (
    <div className="flex">
      <div className="flex-1">
        <div className="flex-1">
          <Header />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </div>
  );
}
