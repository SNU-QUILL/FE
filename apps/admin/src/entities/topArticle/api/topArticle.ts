import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { ITopArticle, ITopArticleUpdateRequest } from "@/entities/topArticle/model/topArticle";
import { api } from "@/shared/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const topArticleQueryKey = {
  all: ["topArticle"],
  get: ["topArticle", "get"],
};

export const useTopArticleQuery = () => {
  return useQuery({
    queryKey: topArticleQueryKey.get,
    queryFn: getTopArticles,
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getTopArticles = async () => {
  const response = await api.get<ITopArticle>(ApiRoutes.TOP_ARTICLE.get);
  return response.data;
};

export const useTopArticleUpdateMutation = () => {
  return useMutation({
    mutationFn: updateTopArticle,
  });
};

const updateTopArticle = async (data: ITopArticleUpdateRequest) => {
  const response = await api.post(ApiRoutes.TOP_ARTICLE.update, data);
  return response.data;
};
