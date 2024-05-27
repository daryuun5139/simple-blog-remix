import type { LinksFunction } from "@remix-run/node";
import styles from "./tailwind.css";
import { Links, Meta, Form, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

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
      <header
        id="header"
        className="flex h-[60px] w-full items-center justify-between border-b-[1px] border-[#3F3F45]"
      >
        <h1 className="flex px-[20px] text-3xl">darun's tech blog</h1>
        <div className="flex px-[20px]">
          <Form id="search-form" role="search" className="flex">
            <input
              id="q"
              className="relative rounded-lg border-2 border-[#3F3F45] bg-[#18181B] px-3 py-2 text-[#797A7C]"
              aria-label="Search contacts"
              placeholder="検索"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
          </Form>
        </div>
        <nav className="flex px-[20px]">
          <ul className="flex gap-8 py-3 text-lg">
            <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
              Blog
            </li>
            <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
              About
            </li>
            <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
              Tags
            </li>
          </ul>
        </nav>
        <div className="flex gap-6 px-[20px]">
          <img src="./blend.svg" alt="change bgcolor" className="h-[35px] w-[35px] rounded-full" />
          <img src="./github.svg" alt="github" className="h-[35px] w-[35px] rounded-full" />
        </div>
      </header>

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
