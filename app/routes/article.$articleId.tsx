import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import ReturnPageTop from "~/components/ReturnPageTop";
import HighlightCode from "~/common/lib/highlightcode";
import invariant from "tiny-invariant";
import { getDetail } from "./_articles/api";
import { formatDate2 } from "~/common/lib/timeFormat";
import parse from "html-react-parser";

type Props = {};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.articleId, "Missing articleId param");
  const article = await getDetail(params.articleId);
  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }
  return json(article);
};

const Article = (props: Props) => {
  const article = useLoaderData<typeof loader>();
  const { id, mainImage, mainTitle, publishedAt, headingText, category, mainText, footerText } =
    article;

  return (
    <div className="flex w-full flex-col items-center" key={id}>
      <div
        id="articleContainer"
        className="relative flex w-full flex-col items-center px-2 pt-[30px] sm:pt-[100px]"
      >
        {/* 記事ヘッダー部分 */}
        <div id="articleHeader" className="relative w-[95%] sm:w-[80%] md:w-[60%] ">
          <Link to={"/"} className="absolute left-0 top-[-20px] hover:underline sm:text-lg">
            ←Back to Home
          </Link>
          <div className="flex w-full justify-center  p-4">
            <img
              src={mainImage.url}
              alt="mainImage"
              className="h-[200px] w-[200px] rounded-full sm:h-[300px] sm:w-[300px]"
            />
          </div>
          <div className="flex flex-col p-4">
            <h1 className="text-center text-2xl font-bold sm:text-4xl">{mainTitle}</h1>
            <time dateTime="2024-05-27" className="pt-2 text-left text-sm text-gray-400">
              {formatDate2(publishedAt)}
            </time>
            <div className="py-2 text-left text-sm text-gray-200">
              {parse(headingText.headingText)}
            </div>
            <ul className="flex gap-3 pt-2 text-sm">
              <Link to={`/${category.category}/1`}>
                <li className="cursor-pointer rounded-full bg-[#52525B] px-2 py-1 duration-500 hover:underline hover:opacity-70">
                  {category.category}
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* 記事横目次部分 画面サイズ1024px以下で出現 */}
        <aside className="mt-[20px] flex flex-col rounded-lg bg-[#3F3F46] p-4 lg:hidden">
          <h2 className="py-1 text-lg font-bold sm:text-xl">目次</h2>
          <ul>
            {mainText.map((chapter, index) => {
              return (
                <>
                  <li className="py-1 text-lg" key={index}>
                    {chapter.fieldId}
                  </li>
                  <ul className="overflow-x-scroll pl-4">
                    {chapter.content.map((item, index) => {
                      // サブタイトルの場合
                      return item.fieldId === "subTitle" ? (
                        <li key={index} className="py-2 text-sm">
                          {item.subTitle}
                        </li>
                      ) : null;
                    })}
                  </ul>
                </>
              );
            })}
          </ul>
        </aside>
        {/* 記事本体部分 */}
        <div
          id="articleBody"
          className="flex w-[95%] justify-between pb-[200px] pt-[40px] lg:pt-[80px] xl:w-[80%]"
        >
          {mainText.map((chapter, index) => {
            return (
              <article key={index} className="flex w-full flex-col lg:w-[68%]">
                <p className="sm:text-lg">
                  React v19 では楽観的更新を行うための `useOptimistic` フックが導入される予定です。
                  <br />
                  楽観的更新とは、ユーザーの操作に対して非同期処理の完了を待たずに UI
                  を更新する手法のことです。
                  <br />
                  楽観的更新によりユーザーの操作に対して即座にフィードバックを提供できるため、UX
                  の向上につながります。
                </p>
                <h2 className="my-5 w-full border-b-[1px] border-[#3F3F45] text-2xl sm:text-3xl">
                  ■ {chapter.fieldId}
                </h2>
                {chapter.content.map((item, index) => {
                  // リッチエディタの場合
                  return item.fieldId === "richEditor" ? (
                    <div key={index} className="my-5 w-full">
                      {HighlightCode(item.richEditor!)}
                    </div>
                  ) : // マークダウンの場合
                  item.fieldId === "markdown" ? (
                    <div key={index} className="my-5 sm:text-lg">
                      {item.markdown}
                    </div>
                  ) : // リッチリンクの場合
                  item.fieldId === "richlink" ? (
                    <div key={index} className="my-5 rounded-md border-[1px] border-[#3F3F45] p-2">
                      {item.richlink}
                    </div>
                  ) : // サブタイトルの場合
                  item.fieldId === "subTitle" ? (
                    <h3
                      key={index}
                      className="my-5 w-fit border-b-[1px] border-[#3F3F45] text-lg sm:text-xl"
                    >
                      ■ {item.subTitle}
                    </h3>
                  ) : // 画像の場合
                  item.fieldId === "image" && item.image ? (
                    <img
                      key={index}
                      src={item.image.url}
                      alt={index.toString()}
                      className="my-5 rounded-sm object-cover"
                      width="450"
                      height="300"
                    />
                  ) : null;
                })}
                <div>
                  <h4 className="my-5 w-full border-b-[1px] border-[#3F3F45] text-2xl sm:text-3xl">
                    ■ {footerText.title}
                  </h4>
                  {parse(footerText.footerText)}
                </div>
              </article>
            );
          })}
          {/* 記事横目次部分 画面サイズ1024px以上で出現 */}
          <aside className="sticky top-[20px] hidden h-[calc(100vh-40px)] w-[28%] flex-col rounded-lg bg-[#3F3F46] p-4 lg:flex">
            <h2 className="py-2 text-2xl font-bold">目次</h2>
            <ul>
              {mainText.map((chapter, index) => {
                return (
                  <>
                    <li className="py-2 text-lg" key={index}>
                      {chapter.fieldId}
                    </li>
                    <ul className="pl-4">
                      {chapter.content.map((item, index) => {
                        // サブタイトルの場合
                        return item.fieldId === "subTitle" ? (
                          <li key={index} className="py-2 text-sm">
                            {item.subTitle}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </>
                );
              })}
            </ul>
          </aside>
        </div>
        <ReturnPageTop />
      </div>
    </div>
  );
};

export default Article;
