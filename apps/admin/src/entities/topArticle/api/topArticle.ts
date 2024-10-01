import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { ITopArticle } from "@/entities/topArticle/model/topArticle";
import { api } from "@/shared/util/api";
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
