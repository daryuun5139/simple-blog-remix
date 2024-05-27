type Props = {};

const ArticleCard = (props: Props) => {
  return (
    <>
      <div className="flex cursor-default flex-col items-center justify-center rounded-md border-2 border-[#3F3F45]">
        <div className="flex w-full justify-center rounded-t-md border-b-2 border-[#3F3F45] p-4">
          <img src="./IMG_0101.JPG" alt="sample" className="h-[200px] w-[200px] rounded-full" />
        </div>
        <div className="flex flex-col p-4">
          <h1 className="cursor-pointer text-center text-xl font-bold duration-500 hover:underline">
            Remixでチュートリアル
          </h1>
          <time dateTime="2024-05-27" className="pt-2 text-left text-sm text-gray-400">
            2024.05.27
          </time>
          <p className="py-2 text-left text-sm text-gray-200">
            React v19 では楽観的更新を行うための `useOptimistic`
            フックが導入される予定です。楽観的更新とは、ユーザーの操作に対して非同期処理の完了を待たずに
            UI
            を更新する手法のことです。楽観的更新によりユーザーの操作に対して即座にフィードバックを提供できるため、UX
            の向上につながります。
          </p>
          <ul className="flex gap-3 pt-2 text-sm">
            <li className="cursor-pointer rounded-full bg-[#52525B] px-2 py-1 duration-500 hover:underline hover:opacity-70">
              React
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Next.js
            </li>
            <li className="cursor-pointer rounded-full bg-[#52525B] px-3 py-1 duration-500 hover:underline hover:opacity-70">
              Remix
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
