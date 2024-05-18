import { ARTICLE_CATEGORY_ENUM } from "@/constants/article";
import { ApiRoutes } from "@/constants/routes";
import { IArticle, IArticleRequest } from "@/interfaces/article";
import { ICommonResponse } from "@/interfaces/common";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const articleQueryKey = {
  all: ["article"],
  articlesAll: ["article", "list"],
  articlesTab: (tab: ARTICLE_CATEGORY_ENUM) => ["article", "list", tab],
};

export const useArticleListQuery = (data: IArticleRequest) => {
  return useQuery({
    queryKey: articleQueryKey.articlesTab(data.category),
    queryFn: () => getArticles(data),
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getArticles = async (data: IArticleRequest) => {
  const response = await api.post<ICommonResponse<IArticle[]>>(ApiRoutes.ARTICLE.list, data);
  return response.data.data;
};
