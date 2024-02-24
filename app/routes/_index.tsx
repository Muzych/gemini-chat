import type { MetaFunction } from "@remix-run/node";
import { Toggle } from "~/components/ui/toggle";
import { Theme, useTheme } from "~/lib/theme-provider";
import Sidebar from '~/components/Sidebar';

export const meta: MetaFunction = () => {
  return [
    { title: "Gemini-Chat" },
    { name: "description", content: "Personal Assistant powerd by Gemini Pro" },
  ];
};

export default function Index() {

  const [, setTheme] = useTheme()

  const toggleTheme = () => {
    setTheme(theme => theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="flex-1">
          <Toggle onClick={toggleTheme}>
            Toggles
          </Toggle>
        </div>
      </div>
    </div>
  );
}
