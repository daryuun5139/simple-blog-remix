import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArticleCard from "~/components/ArticleCard";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { getArticles, getList } from "~/routes/_articles/api";
import { hankakuConvert } from "~/common/lib/hankakuConvert";
import { Pagination } from "~/components/Paginaiton";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const param = url.searchParams.get("q");
  const q = hankakuConvert(param);
  const articles = await getArticles(q);
  const { contents, totalCount, categories } = await getList();
  return json({ contents, articles, q, totalCount });
};

export default function Index() {
  const { contents, articles, q, totalCount } = useLoaderData<typeof loader>();

  const PER_PAGE = 5;
  const filterContents = contents.slice(0, PER_PAGE);

  return (
    <>
      {q ? (
        <>
          {articles.length !== 0 ? (
            <div
              id="articles"
              className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:py-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
            >
              {articles.map((content) => {
                return <ArticleCard content={content!} key={content!.id} />;
              })}
            </div>
          ) : (
            <div
              id="articles"
              className="w-[90%] px-2 py-[10px]  md:py-[40px] lg:w-[80%] 2xl:w-[70%]"
            >
              <p>該当する記事がありません。</p>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            id="articles"
            className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:py-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
          >
            {filterContents.map((content) => {
              return <ArticleCard content={content!} key={content!.id} />;
            })}
          </div>
        </>
      )}
      <Pagination totalCount={totalCount} pageName1="page" />
    </>
  );
}
