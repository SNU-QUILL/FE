import { TMemberListResponse } from "@/entities/member/model/member";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { api } from "@/shared/util/api";
import { useQuery } from "@tanstack/react-query";

const memberQueryKey = {
  all: ["member"] as const,
  list: ["member", "list"] as const,
};

export const useMemberListQuery = () => {
  return useQuery({
    queryKey: memberQueryKey.list,
    queryFn: () => getMemberList(),
  });
};

const getMemberList = async () => {
  const response = await api.get<TMemberListResponse>(ApiRoutes.MEMBER.list);
  return response.data;
};
