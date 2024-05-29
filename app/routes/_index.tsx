import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArticleCard from "~/components/ArticleCard";
import TagContainer from "~/components/TagContainer";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { getArticles } from "~/routes/articles/api";
import { hankakuConvert } from "~/common/lib/hankakuConvert";

export const meta: MetaFunction = () => {
  return [
    { title: "simple blog by remix" },
    { name: "description", content: "This site is a simple blog by remix" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const param = url.searchParams.get("q");
  const q = hankakuConvert(param);
  const articles = await getArticles(q);
  return json({ articles, q });
};

export default function Index() {
  const { articles, q } = useLoaderData<typeof loader>();

  return (
    <div className="flex w-full flex-col items-center justify-center py-[20px]">
      <TagContainer />
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
        <div id="articles" className="w-[90%] px-2 py-[10px]  md:py-[40px] lg:w-[80%] 2xl:w-[70%]">
          <p>該当する記事がありません。</p>
        </div>
      )}
    </div>
  );
}
