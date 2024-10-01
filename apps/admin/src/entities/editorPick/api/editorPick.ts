import { ApiRoutes } from "@/shared/constants/apiRoutes";
import {
  IEditorPickListResponse,
  IUpdateEdiorPickRequest,
} from "@/entities/editorPick/model/editorPick";
import { api } from "@/shared/util/api";
import { useMutation, useQuery } from "@tanstack/react-query";

const editorPickQueryKey = {
  all: ["editorPick"],
  list: ["editorPick", "list"],
};

export const useEditorPickListQuery = () => {
  return useQuery({
    queryKey: editorPickQueryKey.list,
    queryFn: getEditorPickList,
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getEditorPickList = async () => {
  const response = await api.get<IEditorPickListResponse>(`${ApiRoutes.EDITOR_PICK.list}`);
  return response.data;
};

export const useEditorPickUpdateMutation = () => {
  return useMutation({
    mutationFn: updateEditorPick,
  });
};

const updateEditorPick = async ({ id, category }: IUpdateEdiorPickRequest) => {
  const response = await api.post(`${ApiRoutes.EDITOR_PICK.update}/${category}`, { id });
  return response.data;
};
