import { GoogleGenerativeAI } from '@fuyun/generative-ai'
import { LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import dotenv from 'dotenv'
dotenv.config()

const apiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(apiKey as string)
const generationConfig = {
    safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_NONE" },
    ],
    temperature: 0.9,
    topP: 1,
    topK: 1,
    maxOutputTokens: 4096,
};



export const loader = async (c: LoaderFunctionArgs) => {
    const model = genAI.getGenerativeModel({
        model: "gemini-pro",
        generationConfig,
    })
    const prompt = "Write a story about a magic backpack in Chinese"
    const result = await model.generateContent(prompt)
    const response = result.response
    const text = response.text()

    return json({ text })
}


export default function ApIndex() {

    const loaderData = useLoaderData<typeof loader>()
    return (
        <>
            <div>
                <p>
                    {loaderData.text}
                </p>
            </div>
        </>
    )
}