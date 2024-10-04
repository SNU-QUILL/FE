import { IIntroductionGetResponse } from "@/entities/introduction/model/introduciton";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { api } from "@/shared/util/api";
import { useQuery } from "@tanstack/react-query";

const introductionQueryKey = {
  all: ["introduction"] as const,
  get: ["introduction", "get"] as const,
};

export const useIntroductionGetQuery = () => {
  return useQuery({
    queryKey: introductionQueryKey.get,
    queryFn: () => getIntroduction(),
  });
};

const getIntroduction = async () => {
  const response = await api.get<IIntroductionGetResponse>(ApiRoutes.INTRODUCTION.get);
  return response.data;
};
