import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetAllMuncipalities } from "../../../Hooks/MunicipalityHooks";

interface ComboBoxProps {
  onSelectMunicipality: (value: string) => void; // Callback function to set the selected municipality
}

export default function ComboBox({ onSelectMunicipality }: ComboBoxProps) {
  const { data, isLoading, error } = useGetAllMuncipalities();

  if (isLoading || error)
    return (
      <div>
        <input
          placeholder="No found"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
    );

  return (
    <Autocomplete
      disablePortal
      options={data || []}
      sx={{ width: 300 }}
      getOptionLabel={(option: { municipalityId: number; name: string }) =>
        option.name
      }
      onChange={(_, value) => {
        if (value) {
          console.log(value.municipalityId);
          onSelectMunicipality(String(value.municipalityId)); // Update the selected municipality in the parent component
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#B0BEC5" }, // Default gray shade
              "&:hover fieldset": { borderColor: "#90A4AE" }, // Slightly darker on hover
              "&.Mui-focused fieldset": { borderColor: "#78909C" }, // Darker on focus
            },
            "& .MuiInputLabel-root": {
              color: "#9333EA",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#9333EA",
            },
          }}
        />
      )}
    />
  );
}
