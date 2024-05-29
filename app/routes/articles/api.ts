import { client } from "~/common/lib/client";
import type { MicroCMSQueries, GetListRequest, CustomRequestInit } from "microcms-js-sdk";
import type {
  ArticleType,
  ArticleType_en,
  CategoryType,
  PublishGroup,
  categoryArray,
} from "~/common/types/article";

// ブログ、カテゴリ、公開日一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const [listData, categoryData, publishedAtData, countByCategory] = await Promise.all([
    client.getList<ArticleType>({
      customRequestInit: {
        // cache: "no-store",
      },
      endpoint: "blogs",
      queries,
    }),
    client.getList<CategoryType>({
      customRequestInit: {
        // cache: "no-store",
      },
      endpoint: "categories",
      queries,
    }),
    client.getList<ArticleType>({
      customRequestInit: {
        // cache: "no-store",
      },
      endpoint: "blogs",
      queries: { fields: "publishedAt", limit: 300 },
    }),
    client.getList<ArticleType>({
      customRequestInit: {
        // cache: "no-store",
      },
      endpoint: "blogs",
      queries: { fields: "category.category", limit: 300 },
    }),
  ]);
  return {
    contents: listData.contents,
    totalCount: listData.totalCount,
    categories: categoryData.contents,
    publishAt: publishedAtData.contents,
    countByCategory: countByCategory.contents,
  };
};

// ブログの詳細を取得（日本語）
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client.getListDetail<ArticleType>({
    customRequestInit: {
      // cache: "no-store",
    },
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
