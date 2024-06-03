import TagContainer from "~/components/TagContainer";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getList } from "./api";
import { Outlet, useLoaderData } from "@remix-run/react";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { categories } = await getList();
  return json({ categories });
};

const ArticleList = () => {
  const { categories } = useLoaderData<typeof loader>();
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center py-[20px]">
        <TagContainer categories={categories} />
        <Outlet />
      </div>
    </>
  );
};

export default ArticleList;
