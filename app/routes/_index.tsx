import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArticleCard from "~/components/ArticleCard";
import TagContainer from "~/components/TagContainer";

import { getList } from "./articles/api";

export const meta: MetaFunction = () => {
  return [
    { title: "simple blog by remix" },
    { name: "description", content: "This site is a simple blog by remix" },
  ];
};

export const loader = async () => {
  const { contents } = await getList();
  return json({ contents });
};

export default function Index() {
  const { contents } = useLoaderData<typeof loader>();

  return (
    <div className="flex w-full flex-col items-center justify-center py-[20px]">
      <TagContainer />
      <div
        id="articles"
        className="grid w-[90%] gap-6 px-2 py-[10px] md:grid-cols-2 md:py-[40px] lg:w-[80%] xl:grid-cols-3 2xl:w-[70%]"
      >
        {contents.map((content) => {
          return <ArticleCard content={content} key={content.id} />;
        })}
      </div>
    </div>
  );
}
