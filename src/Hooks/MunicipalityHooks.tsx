import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchMunicipalities,
  addMunicipality,
  deleteMuncipality,
  fetchAllMuncipality,
} from "../Services/Admin/MunicipalityServices";
import { fetchSearchMunicipalities } from "../Services/User/MunicipalityServices";
interface Municipality {
  municipalityId: number;
  name: string;
  state?: string;
  isActive: boolean;
}

export const useMunicipalities = (page: number = 1, limit: number = 5) => {
  return useQuery({
    queryKey: ["municipalities", page, limit],
    queryFn: () => fetchMunicipalities(page, limit),
    placeholderData: (previousData) => previousData ?? [],
  });
};

export const useAddMunicipality = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addMunicipality,
    onSuccess: (newMunicipalities) => {
      queryClient.setQueryData<Municipality[]>(
        ["municipalities"],
        (oldMunicipalities = []) => [...oldMunicipalities, newMunicipalities]
      );
    },
    onError: (error) => {
      console.error("Error adding municipality:", error);
    },
  });
};

export const useDeleteMunicipality = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMuncipality,
    onSuccess: (deletedMunicipalityId) => {
      queryClient.setQueryData<Municipality[]>(
        ["municipalities"],
        (oldMunicipalities = []) =>
          oldMunicipalities.filter(
            (municipality) =>
              municipality.municipalityId !== deletedMunicipalityId
          )
      );
    },
    onError: (error) => {
      console.error("Error deleting municipality:", error);
    },
  });
};

export const useMunicipalitySearch = (searchKey: string) => {
  return useQuery({
    queryKey: ["municipalities", searchKey], // Cache based on search term
    queryFn: () => fetchSearchMunicipalities(searchKey),
    enabled: !!searchKey, // Only fetch when there is input
    staleTime: 60000, // Cache results for 1 minute
  });
};

export const useGetAllMuncipalities = () => {
  return useQuery({
    queryKey: ["allMuncipality"],
    queryFn: () => fetchAllMuncipality(),
  });
};
