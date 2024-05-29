import { Form, Link, NavLink } from "@remix-run/react";

type Props = {};

const Header = (props: Props) => {
  return (
    <>
      <header
        id="header"
        className="flex h-[60px] w-full cursor-default items-center justify-center border-b-[1px] border-[#3F3F45]"
      >
        <div className="flex w-full items-center justify-between xl:w-[80%]">
          <div className="px-[20px] lg:hidden">
            <img
              src="./menu.svg"
              alt="navMenu"
              className="h-[40px] w-[40px] hover:cursor-pointer "
            />
          </div>
          <h1 className="flex text-xl xs:px-[20px] xs:text-2xl lg:text-3xl">
            <Link to="/"> darun's tech blog</Link>
          </h1>
          <div className="hidden px-[20px] md:flex">
            <Form id="search-form" role="search" className="relative flex">
              <span>
                <img
                  src="/public/search.svg"
                  alt="searchIcon"
                  className="absolute left-[8px] top-[14px] z-10 h-[16px] w-[16px]"
                />
              </span>
              <input
                id="q"
                className="w-[250px] rounded-lg border-2 border-[#3F3F45] bg-[#18181B] px-3 py-2 text-[#797A7C]"
                aria-label="Search contacts"
                placeholder="   検索"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
            </Form>
          </div>
          <nav className="hidden px-[20px] lg:flex">
            <ul className="flex gap-8 py-3 text-lg">
              <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">
                  Blog
                </NavLink>
              </li>
              <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/about">
                  About
                </NavLink>
              </li>
              <li className="cursor-pointer rounded-md px-3 py-1 duration-500 hover:bg-[#52525B]">
                <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/link">
                  Link
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="flex gap-3 px-[20px]">
            <img
              src="/public/search.svg"
              alt="search"
              className="block h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] md:hidden"
            />
            <img
              src="./blend.svg"
              alt="change bgcolor"
              className="hidden h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] sm:block"
            />
            <a href="https://github.com/">
              <img
                src="/public/github.svg"
                alt="github"
                className="hidden h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] sm:block"
              />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
