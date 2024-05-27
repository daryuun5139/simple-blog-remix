type Props = {};

const TagContainer = (props: Props) => {
  return (
    <>
      <div id="tagContainer" className="w-[90%] p-2 lg:w-[80%] xl:w-[40%]">
        <div className="mb-3 flex rounded-lg border-2 border-[#3F3F45] p-2 pb-0">
          <ul className="tagContainer flex gap-4 overflow-x-scroll pb-1 xl:flex-wrap">
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              React
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Next.js
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Remix
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Typescript
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              CSS
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              a11y
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              webAPI
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Git
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TagContainer;
