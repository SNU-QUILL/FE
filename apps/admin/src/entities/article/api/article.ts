import { EARTICLE_CATEGORY } from "../model/article";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import {
  IArticle,
  IArticleDetailResponse,
  IArticleRecentRequest,
  IArticleRequest,
  IArticleResponse,
} from "@/entities/article/model/article";
import { api } from "@/shared/util/api";
import { useQuery } from "@tanstack/react-query";

const articleQueryKey = {
  all: ["article"],
  articlesAll: ["article", "list"],
  articlesTab: (tab: EARTICLE_CATEGORY, page: number) => ["article", "list", tab, page],
  articleDetail: (id: number) => ["article", "detail", id],
  articleRecent: ["article", "list", "recent"],
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
    `${ApiRoutes.ARTICLE.list}/${data.category}/${data.page}`,
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

export const useRecentArticleQuery = (request: IArticleRecentRequest) => {
  return useQuery({
    queryKey: articleQueryKey.articleRecent,
    queryFn: () => getRecentArticle(request),
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getRecentArticle = async (request: IArticleRecentRequest) => {
  const response = await api.get<IArticle[]>(ApiRoutes.ARTICLE.recent, {
    params: request,
  });
  return response.data;
};