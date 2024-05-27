import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import { Links, Meta, Form, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
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
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
