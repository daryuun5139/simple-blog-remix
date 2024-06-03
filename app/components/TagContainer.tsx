import { NavLink } from "@remix-run/react";
import { CategoryType } from "~/common/types/article";

type Props = {
  categories: CategoryType[];
};

const TagContainer = ({ categories }: Props) => {
  return (
    <>
      <div id="tagContainer" className="w-[90%] p-2 lg:w-[80%] xl:w-[40%]">
        <div className="mb-3 flex rounded-lg border-2 border-[#3F3F45] p-2 pb-0">
          <ul className="tagContainer flex gap-4 overflow-x-scroll pb-1 xl:flex-wrap">
            <>
              {categories.map((category, index) => {
                return (
                  <NavLink
                    key={index}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    to={`/${category.category}/1`}
                  >
                    <li
                      key={index}
                      className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70"
                    >
                      {category.category}
                    </li>
                  </NavLink>
                );
              })}
            </>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TagContainer;
