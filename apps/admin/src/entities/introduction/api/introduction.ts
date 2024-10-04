import {
  IIntroductionGetResponse,
  IIntroductionUpdateRequest,
} from "@/entities/introduction/model/introduciton";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { api } from "@/shared/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const useIntroductionUpdateMutation = () => {
  return useMutation({
    mutationFn: (request: IIntroductionUpdateRequest) => updateIntroduction(request),
  });
};

const updateIntroduction = async (request: IIntroductionUpdateRequest) => {
  const response = await api.post(ApiRoutes.INTRODUCTION.update, request);
  return response.data;
};
