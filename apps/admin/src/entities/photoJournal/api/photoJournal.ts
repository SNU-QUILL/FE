import { ApiRoutes } from "@/shared/constants/apiRoutes";
import { IPhotoJournal } from "@/entities/photoJournal/model/photoJournal";
import { api } from "@/shared/util/api";
import { useQuery } from "@tanstack/react-query";

const photoJournalQueryKey = {
  all: ["photoJournal"] as const,
  list: ["photoJournal", "list"] as const,
};

export const usePhotoJournalList = () => {
  return useQuery({
    queryKey: photoJournalQueryKey.list,
    queryFn: getPhotoJournalList,
    gcTime: 0,
    staleTime: Infinity,
  });
};

const getPhotoJournalList = async () => {
  const response = await api.get<IPhotoJournal[]>(ApiRoutes.PHOTO_JOURNAL.list);
  return response.data;
};
