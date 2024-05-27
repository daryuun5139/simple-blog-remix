import { Form } from "@remix-run/react";

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
          <h1 className="flex text-2xl xs:px-[20px] lg:text-3xl">darun's tech blog</h1>
          <div className="hidden px-[20px] md:flex">
            <Form id="search-form" role="search" className="relative flex">
              <span>
                <img
                  src="./search.svg"
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
          <div className="flex gap-3 px-[20px]">
            <img
              src="./search.svg"
              alt="search"
              className="block h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] md:hidden"
            />
            <img
              src="./blend.svg"
              alt="change bgcolor"
              className="hidden h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] sm:block"
            />
            <img
              src="./github.svg"
              alt="github"
              className="hidden h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] sm:block"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
