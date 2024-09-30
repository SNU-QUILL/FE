import { ApiRoutes } from "@/constants/routes";
import { IPhotoJournal } from "@/interfaces/api/photoJournal";
import { api } from "@/utils/api";
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
