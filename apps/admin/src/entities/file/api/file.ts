import { IFileUploadRequest, IFileUploadResponse } from "@/entities/file/model/file";
import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { api } from "@/shared/util/api";
import { useMutation } from "@tanstack/react-query";

const fileQueryKey = {
  all: ["file"] as const,
  upload: ["file", "upload"] as const,
};

export const useFileUploadMutation = () => {
  return useMutation({
    mutationFn: (request: IFileUploadRequest) => uploadFile(request),
    mutationKey: fileQueryKey.upload,
  });
};

const uploadFile = async (request: IFileUploadRequest) => {
  const formData = new FormData();
  formData.append("file", request.file);
  const response = await api.post<IFileUploadResponse>(ApiRoutes.FILE.upload, formData, {
    params: { fileType: request.fileType },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
