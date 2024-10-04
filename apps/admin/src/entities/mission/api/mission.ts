import { IMissionGetResponse, IMissionUpdateRequest } from "@/entities/mission/model/mission";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { api } from "@/shared/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const missionQueryKey = {
  all: ["mission"] as const,
  get: ["mission", "get"] as const,
};

export const useMissionGetQuery = () => {
  return useQuery({
    queryKey: missionQueryKey.get,
    queryFn: getMission,
  });
};

const getMission = async () => {
  const { data } = await api.get<IMissionGetResponse>(ApiRoutes.MISSION.get);
  return data;
};

export const useMissionUpdateMutation = () => {
  return useMutation({
    mutationFn: (request: IMissionUpdateRequest) => updateMission(request),
  });
};

const updateMission = async (request: IMissionUpdateRequest) => {
  const response = await api.post(ApiRoutes.MISSION.update, request);
  return response.data;
};
