import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css?url";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="retro:bg-red-400 light:bg-white modern:bg-blue-400 dark:bg-slate-800">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main" className="flex grow items-center justify-center">
        <div id="opacityWrapper" className="fixed z-10 bg-slate-800 opacity-50" />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
