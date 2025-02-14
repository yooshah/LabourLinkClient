import { useQuery , useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMunicipalities,addMunicipality,deleteMuncipality } from "../Services/Admin/MunicipalityServices";
interface Municipality {
  municipalityId: number;
  name: string;
  state?: string; 
  isActive:Boolean;
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
      queryClient.setQueryData<Municipality[]>(["municipalities"], (oldMunicipalities = []) => [
        ...oldMunicipalities,
        newMunicipalities,
      ]);
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
      queryClient.setQueryData<Municipality[]>(["municipalities"], (oldMunicipalities = []) =>
        oldMunicipalities.filter((municipality) => municipality.municipalityId !== deletedMunicipalityId)
      );
    },
    onError: (error) => {
      console.error("Error deleting municipality:", error);
    },
  });
};