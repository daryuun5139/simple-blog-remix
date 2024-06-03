import { client } from "~/common/lib/client";
import type { MicroCMSQueries, GetListRequest, CustomRequestInit } from "microcms-js-sdk";
import type { ArticleType, CategoryType, categoryArray } from "~/common/types/article";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";
import { hankakuConvert } from "~/common/lib/hankakuConvert";

// article一覧、カテゴリ一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const [listData, categoryData, countByCategory] = await Promise.all([
    client.getList<ArticleType>({
      customRequestInit: {},
      endpoint: "blogs",
      queries: { limit: 50 },
    }),
    client.getList<CategoryType>({
      customRequestInit: {},
      endpoint: "categories",
      queries,
    }),
    client.getList<ArticleType>({
      customRequestInit: {},
      endpoint: "blogs",
      queries: { fields: "category.category", limit: 300 },
    }),
  ]);
  return {
    contents: listData.contents,
    totalCount: listData.totalCount,
    categories: categoryData.contents,
    countByCategory: countByCategory.contents,
  };
};

// ブログの詳細を取得（日本語）
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<ArticleType>({
    customRequestInit: {},
    endpoint: "blogs",
    contentId,
    queries,
  });
  return detailData;
};

//カテゴリ別のコンテンツ数を取得
export const categoryCount = async () => {
  const { countByCategory } = await getList();
  const array = countByCategory.map((item): string => item.category.category);
  const categoryArray: categoryArray = {} as categoryArray;
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    categoryArray[item] = (categoryArray[item] || 0) + 1;
  }
  return categoryArray;
};

// ブログのプレビューを取得（日本語）
export const getDraft = async (
  contentId: string,
  queries?: MicroCMSQueries & { draftKey: string }
) => {
  const draftData = await client.get<ArticleType>({
    // customRequestInit: { cache: "no-store" },
    endpoint: "blogs",
    contentId,
    queries,
  });
  return draftData;
};

// 検索文字列にマッチする記事一覧を取得
export const getArticles = async (query?: string | null) => {
  const { contents } = await getList();
  if (query) {
    const articles = contents.map((content) => {
      const mainTitle = hankakuConvert(content.mainTitle);
      if (mainTitle!.includes(query)) {
        return content;
      } else {
        return null;
      }
    });
    return articles.filter(Boolean);
  } else {
    return contents;
  }
};
