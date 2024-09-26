import { EARTICLE_CATEGORY } from "@/constants/article";
import { ApiRoutes } from "@/constants/routes";
import {
  IArticleDetailResponse,
  IArticleRequest,
  IArticleResponse,
} from "@/interfaces/api/article";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const articleQueryKey = {
  all: ["article"],
  articlesAll: ["article", "list"],
  articlesTab: (tab: EARTICLE_CATEGORY, page: number) => ["article", "list", tab, page],
  articleDetail: (id: number) => ["article", "detail", id],
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

export const useArticleDetailQuery = (id?: number) => {
  return useQuery({
    queryKey: articleQueryKey.articleDetail(id!),
    queryFn: () => getArticleDetail(id!),
    gcTime: 0,
    staleTime: Infinity,
    enabled: !!id,
  });
};

const getArticleDetail = async (id: number) => {
  const response = await api.get<IArticleDetailResponse>(`${ApiRoutes.ARTICLE.detail}/${id}`);
  return response.data;
};
