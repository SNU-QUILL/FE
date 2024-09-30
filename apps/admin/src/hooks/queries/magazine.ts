import { ApiRoutes } from "@/constants/routes";
import { IMagazine, IMagazineListRequest } from "@/interfaces/api/magazine";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

const magazineQueryKey = {
  all: ["magazine"] as const,
  list: ["magazine", "list"] as const,
};

export const useMagazineListQuery = (params: IMagazineListRequest) => {
  return useQuery({
    queryKey: magazineQueryKey.list,
    queryFn: () => getMagazineList(params),
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getMagazineList = async (params: IMagazineListRequest) => {
  const response = await api.get<IMagazine[]>(ApiRoutes.MAGAZINE.list, {
    params,
  });
  return response.data;
};
