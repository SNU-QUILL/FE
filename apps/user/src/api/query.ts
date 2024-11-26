import { api } from "@/api/api";
import { IOperations } from "@/api/operations";
import { useQuery } from "@tanstack/react-query";

export const useGetQuery = <T extends keyof IOperations>(
  path: T,
  params: IOperations[T]["request"],
) => {
  return useQuery({
    queryKey: [...path.split("/"), params && { ...params }],
    queryFn: async () => {
      const response = await api.get<IOperations[T]["response"]>(path, {
        params,
      });
      return response.data;
    },
  });
};
