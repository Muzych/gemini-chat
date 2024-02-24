import stylesheet from "~/tailwind.css";
import clsx from "clsx";
import { ThemeProvider, useTheme } from "./lib/theme-provider";

import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";



function App() {

  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}


export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function AppWithProviders() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
}