import { Link } from "@remix-run/react";
import { formatDate2 } from "~/common/lib/timeFormat";
import { ArticleType } from "~/common/types/article";
import parse from "html-react-parser";

type Props = {
  content: ArticleType;
};

const ArticleCard = ({ content }: Props) => {
  const { id, mainImage, mainTitle, headingText, publishedAt, category } = content;
  return (
    <>
      <div className="flex cursor-default flex-col items-center justify-center rounded-md border-2 border-[#3F3F45]">
        <div className="flex w-full justify-center rounded-t-md border-b-2 border-[#3F3F45] p-4">
          <img src={`${mainImage.url}`} alt="sample" className="h-[200px] w-[200px] rounded-full" />
        </div>
        <div className="flex flex-col p-4">
          <h1 className="cursor-pointer text-center text-xl font-bold duration-500 hover:underline">
            <Link to={`/articles/${id}`}> {mainTitle}</Link>
          </h1>
          <time dateTime="2024-05-27" className="pt-2 text-left text-sm text-gray-400">
            {formatDate2(publishedAt)}
          </time>
          <p className="py-2 text-left text-sm text-gray-200">{parse(headingText.headingText)}</p>
          <ul className="flex gap-3 pt-2 text-sm">
            <li className="cursor-pointer rounded-full bg-[#52525B] px-2 py-1 duration-500 hover:underline hover:opacity-70">
              {category.category}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
