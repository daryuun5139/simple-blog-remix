import { useEffect, useRef, useState } from "react";

type Theme = "light" | "dark" | "retro" | "modern";

const ChangeTheme = () => {
  const [theme, setTheme] = useState<Theme>("dark");
  const dropdownRef = useRef<HTMLButtonElement>(null);
  const themes = ["dark", "light", "retro", "modern"];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as Theme;
    setTheme(value);
    if (value === "dark") {
      document.documentElement.classList.remove("light", "dark", "retro", "modern");
      document.documentElement.classList.add("dark");
    } else if (value === "light") {
      document.documentElement.classList.remove("light", "dark", "retro", "modern");
      document.documentElement.classList.add("light");
    } else if (value === "retro") {
      document.documentElement.classList.remove("light", "dark", "retro", "modern");
      document.documentElement.classList.add("retro");
    } else if (value === "modern") {
      document.documentElement.classList.remove("light", "dark", "retro", "modern");
      document.documentElement.classList.add("modern");
    }
  };

  const display = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (document) {
      const dropdownMenu = document.getElementById("themeOptions");
      const dropdownIcon = document.getElementById("themeIcon");
      if (!dropdownMenu!.classList.contains("show")) {
        dropdownMenu!.classList.toggle("show");
        dropdownIcon!.classList.toggle("show");
      } else {
        dropdownMenu!.classList.toggle("show");
        dropdownIcon!.classList.toggle("show");
      }
    }
  };

  useEffect(() => {
    const dropdownMenu = document.getElementById("themeOptions");
    const dropdownIcon = document.getElementById("themeIcon");
    document.documentElement.addEventListener("click", () => {
      if (dropdownMenu!.classList.contains("show")) {
        dropdownMenu!.classList.toggle("show");
        dropdownIcon!.classList.toggle("show");
      } else if (dropdownRef.current!.contains(document.activeElement)) {
        dropdownMenu!.classList.toggle("show");
        dropdownIcon!.classList.toggle("show");
      }
    });
  }, []);

  return (
    <div className="relative">
      <button onClick={display} id="dropdownBtn" ref={dropdownRef}>
        <img
          src="/icons/blend.svg"
          id="themeIcon"
          alt="change bgcolor"
          className="hidden h-[45px] w-[45px] cursor-pointer rounded-full bg-black p-2 duration-500 hover:bg-[#52525B] sm:block"
        />
      </button>
      <div
        id="themeOptions"
        className="absolute left-[-40px] top-[45px] hidden rounded-lg border-[1px] border-[#3F3F45] bg-black"
      >
        <ul className="flex flex-col justify-center text-white">
          {themes.map((item, index) => {
            return (
              <li
                key={index}
                className="flex w-[130px] cursor-pointer py-3 pl-2 pr-3 duration-200 hover:bg-[#52525B] hover:underline"
              >
                <input
                  type="radio"
                  id={`${item}Option`}
                  name="themeOptions"
                  value={item}
                  className="hidden"
                  onChange={handleChange}
                />
                <label
                  htmlFor={`${item}Option`}
                  className="flex w-full cursor-pointer justify-between"
                >
                  <div className="flex">
                    <img
                      src={`/icons/${item}.svg`}
                      alt="light theme"
                      className="mt-[0.5px] h-[20px] w-[20px]"
                    />
                    <span className="pl-2">{item}</span>
                  </div>
                  <div className="flex">
                    {item === theme ? (
                      <img
                        src="/icons/check.svg"
                        alt="now theme"
                        className="mt-[1px] h-[20px] w-[20px]"
                      />
                    ) : null}
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ChangeTheme;
