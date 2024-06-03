import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { getList } from "./_articles/api";
import ArticleCard from "~/components/ArticleCard";
import { Pagination } from "~/components/Paginaiton";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.pageId, "Missing articleId param");
  const pageId = params.pageId;
  const { contents, totalCount } = await getList();
  return json({ contents, totalCount, pageId });
};

export default function ArticlesPageId() {
  const { contents, totalCount, pageId } = useLoaderData<typeof loader>();

  const PER_PAGE = 5;
  const currentNumber = Number(pageId);
  const filterContents = contents.slice((currentNumber - 1) * PER_PAGE, currentNumber * PER_PAGE);

  return (
    <>
      <h2 className="pb-3 text-center sm:text-lg md:pb-6 md:text-xl">
        記事一覧 ({currentNumber} / {Math.ceil(totalCount / PER_PAGE)})
      </h2>
      {contents.length !== 0 ? (
        <div
          id="articles"
          className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:py-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
        >
          {filterContents.map((content) => {
            return <ArticleCard content={content!} key={content!.id} />;
          })}
        </div>
      ) : (
        <div id="articles" className="w-[90%] px-2 py-[10px]  md:py-[40px] lg:w-[80%] 2xl:w-[70%]">
          <p>該当する記事がありません。</p>
        </div>
      )}
      <Pagination totalCount={totalCount} currentNumber={currentNumber} pageName1="page" />
    </>
  );
}
