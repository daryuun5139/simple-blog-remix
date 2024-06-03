import { NavLink } from "@remix-run/react";
import { useEffect, useRef } from "react";

type Props = {};

const DropdownMenu = (props: Props) => {
  const navMenuRef = useRef<HTMLButtonElement>(null);
  const menuItem = ["Blog", "About", "Link"];

  const display = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (document) {
      const navMenu = document.getElementById("navMenuItems");
      const opacityWrapper = document.getElementById("opacityWrapper");
      if (!navMenu!.classList.contains("show")) {
        navMenu!.classList.toggle("show");
        opacityWrapper!.classList.toggle("show");
        document.body.classList.toggle("show");
      } else {
        navMenu!.classList.toggle("show");
        opacityWrapper!.classList.toggle("show");
        document.body.classList.toggle("show");
      }
    }
  };

  useEffect(() => {
    const navMenu = document.getElementById("navMenuItems");
    const opacityWrapper = document.getElementById("opacityWrapper");
    document.documentElement.addEventListener("click", () => {
      if (navMenu!.classList.contains("show")) {
        navMenu!.classList.toggle("show");
        opacityWrapper!.classList.toggle("show");
        document.body.classList.toggle("show");
      } else if (navMenuRef.current!.contains(document.activeElement)) {
        navMenu!.classList.toggle("show");
        opacityWrapper!.classList.toggle("show");
        document.body.classList.toggle("show");
      }
    });
  }, []);

  return (
    <div>
      <button onClick={display} id="navMenuBtn" ref={navMenuRef}>
        <img
          src="/icons/menu.svg"
          alt="navMenu"
          className="h-[40px] w-[40px] hover:cursor-pointer  "
        />
      </button>
      <aside
        id="navMenuItems"
        className="fixed left-[-280px] top-0 z-20 h-screen w-[280px] bg-[#27272A] duration-500"
      >
        <div className="flex w-full justify-between border-b-[1px] border-[#3F3F45]">
          <h1 className="py-3 pl-3 text-2xl">darun's tech blog</h1>
          <img
            src="/icons/x.svg"
            alt="close nav"
            className="w-[50px] cursor-pointer px-2 duration-500 hover:bg-[#52525B]"
          />
        </div>
        <nav className="flex w-full">
          <ul className="flex w-full flex-col gap-3 pt-5 text-xl">
            {menuItem.map((item, index) => (
              <NavLink
                key={index}
                className={({ isActive }) => (isActive ? "active" : "")}
                to={`/${item}`}
              >
                <li className="cursor-pointer py-4 pl-4 duration-500 hover:bg-[#52525B]">{item}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
        <div className="fixed bottom-0 flex w-full gap-3 border-t-[1px] border-[#3F3F45] py-2 pl-3">
          <img
            src="/icons/search.svg"
            alt="search"
            className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B]"
          />
          <a href="https://github.com/">
            <img
              src="/icons/github.svg"
              alt="github"
              className="h-[40px] w-[40px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B]"
            />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default DropdownMenu;
