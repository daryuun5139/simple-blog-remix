import { Link, NavLink } from "@remix-run/react";

type PaginationProps = {
  totalCount: number;
  pageName1: string;
  pageName2?: string;
  currentNumber?: number;
};

export const Pagination = ({ totalCount, currentNumber, pageName1 }: PaginationProps) => {
  const PER_PAGE = 5;
  const LAST_PAGE = Math.ceil(totalCount / PER_PAGE);
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  if (pageName1 === "page") {
    return (
      <ul className="pagenation flex items-center justify-center py-8">
        {currentNumber! > 1 ? (
          <Link to={`/page/${currentNumber! - 1}`}>
            <li className="flex h-[50px] w-[50px] items-center justify-center rounded-l-md border-[1px] border-r-0 border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              <img src="/icons/chevrons-left.svg" alt="previousPage" />
            </li>
          </Link>
        ) : null}
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "active" : "")}
            to={`/page/${number}`}
          >
            <li className="flex h-[50px] w-[50px] items-center justify-center border-[1px] border-r-0 border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              {number}
            </li>
          </NavLink>
        ))}
        {currentNumber! !== LAST_PAGE ? (
          <Link to={`/page/${currentNumber! + 1}`}>
            <li className="flex h-[50px] w-[50px] items-center justify-center rounded-r-md border-[1px] border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              <img src="/icons/chevrons-right.svg" alt="nextPage" />
            </li>
          </Link>
        ) : null}
      </ul>
    );
  } else {
    return (
      <ul className="pagenation flex items-center justify-center py-8">
        {currentNumber! > 1 ? (
          <Link to={`/${pageName1}/${currentNumber! - 1}`}>
            <li className="flex h-[50px] w-[50px] items-center justify-center rounded-l-md border-[1px] border-r-0 border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              <img src="/icons/chevrons-left.svg" alt="previousPage" />
            </li>
          </Link>
        ) : null}
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
          <NavLink
            key={index}
            className={({ isActive }) => (isActive ? "active" : "")}
            to={`/${pageName1}/${number}`}
          >
            <li className="flex h-[50px] w-[50px] items-center justify-center border-[1px] border-r-0 border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              {number}
            </li>
          </NavLink>
        ))}
        {currentNumber! !== LAST_PAGE ? (
          <Link to={`/${pageName1}/${currentNumber! + 1}`}>
            <li className="flex h-[50px] w-[50px] items-center justify-center rounded-r-md border-[1px] border-[#3F3F45] text-lg duration-500 hover:bg-[#52525B]">
              <img src="/icons/chevrons-right.svg" alt="nextPage" />
            </li>
          </Link>
        ) : null}
      </ul>
    );
  }
};
