import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Content from "~/components/Content"

export const meta: MetaFunction = () => {
  return [
    { title: "Gemini-Chat" },
    { name: "description", content: "Personal Assistant powerd by Gemini Pro" },
  ];
};

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
