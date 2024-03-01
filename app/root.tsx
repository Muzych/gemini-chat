import stylesheet from "~/tailwind.css";
import clsx from 'clsx';
import { Provider } from "jotai";
import { NextUIProvider } from "@nextui-org/react";


import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useTheme } from "./utils/providers/theme-provider";


function App() {

  const [theme, setTheme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <NextUIProvider>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </NextUIProvider>
      </body>
    </html>
  );
}


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

function AppWithProviders() {
  return (
    <Provider>
      <App />
    </Provider>
  )
}
export default AppWithProviders