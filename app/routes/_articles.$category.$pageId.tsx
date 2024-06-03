import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import { getList } from "./_articles/api";
import ArticleCard from "~/components/ArticleCard";
import { Pagination } from "~/components/Paginaiton";
import { useEffect, useState } from "react";
import { ArticleType } from "~/common/types/article";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.category, "Missing articleId param");
  const category = params.category;
  const pageId = params.pageId;
  const { categories, contents } = await getList();
  return json({ contents, category, categories, pageId });
};

export default function CategoryPage() {
  const { category, pageId, contents } = useLoaderData<typeof loader>();
  const [totalCount, setTotalCount] = useState<number>(0);
  const [filterContents, setFilterContents] = useState<ArticleType[]>(contents);

  useEffect(() => {
    const filterContents = contents
      .map((content) => {
        if (content.category.category === category) {
          return content;
        }
      })
      .filter(Boolean);
    setFilterContents(filterContents as ArticleType[]);
    setTotalCount(filterContents.length);
  }, [category]);

  const PER_PAGE = 5;
  const currentNumber = Number(pageId);

  return (
    <>
      <h2 className="pb-2 text-center sm:text-xl md:pt-5 md:text-2xl">
        タグ：{category}の記事一覧
      </h2>
      {filterContents.length !== 0 ? (
        <div
          id="articles"
          className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:pb-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
        >
          {filterContents.map((content, index) => {
            return <ArticleCard content={content!} key={index} />;
          })}
        </div>
      ) : (
        <div id="articles" className="w-[90%] px-2 py-[10px]  md:py-[40px] lg:w-[80%] 2xl:w-[70%]">
          <p>該当する記事がありません。</p>
        </div>
      )}
      <Pagination totalCount={totalCount} currentNumber={currentNumber} pageName1={category} />
    </>
  );
}
