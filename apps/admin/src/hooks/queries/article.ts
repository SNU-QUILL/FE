import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { ApiRoutes } from "@/constants/routes";
import { IArticleRequest, IArticleResponse } from "@/interfaces/api/article";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const articleQueryKey = {
  all: ["article"],
  articlesAll: ["article", "list"],
  articlesTab: (tab: ARTICLE_CATEGORY_ENUM, page: number) => ["article", "list", tab, page],
};

export const useArticleListQuery = (data: IArticleRequest) => {
  return useQuery({
    queryKey: articleQueryKey.articlesTab(data.category, data.page),
    queryFn: () => getArticles(data),
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getArticles = async (data: IArticleRequest) => {
  const response = await api.get<IArticleResponse>(
    `${ApiRoutes.ARTICLE.list}/${data.category}/${data.page}`
  );
  return response.data;
};
