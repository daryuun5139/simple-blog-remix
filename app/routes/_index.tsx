import type { MetaFunction } from "@remix-run/node";
import ArticleCard from "~/components/ArticleCard";
import TagContainer from "~/components/TagContainer";

export const meta: MetaFunction = () => {
  return [
    { title: "simple blog by remix" },
    { name: "description", content: "This site is a simple blog by remix" },
  ];
};

export default function Index() {
  return (
    <div className="flex w-full flex-col items-center justify-center py-[20px]">
      <TagContainer />
      <div
        id="articles"
        className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:py-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
      >
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </div>
  );
}
