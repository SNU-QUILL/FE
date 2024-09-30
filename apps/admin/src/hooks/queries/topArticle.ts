import { ApiRoutes } from "@/constants/routes";
import { ITopArticle } from "@/interfaces/api/topArticle";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const topArticleQueryKey = {
  all: ["topArticle"],
};

export const useTopArticleQuery = () => {
  return useQuery({
    queryKey: topArticleQueryKey.all, // todo: topArticle api 추가 시 수정 필요
    queryFn: getTopArticles,
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getTopArticles = async () => {
  const response = await api.get<ITopArticle>(ApiRoutes.TOP_ARTICLE.get);
  return response.data;
};
