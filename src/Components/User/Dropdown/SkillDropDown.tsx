import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useGetAllSkill } from "../../../Hooks/SkillHooks";

interface SkillDropdownProps {
  onSelectSkill: (value: { skillId: string; skillName: string }) => void;

  required?: boolean;
}

export default function SkillDropdown({
  onSelectSkill,

  required = false,
}: SkillDropdownProps) {
  const { data, isLoading, error } = useGetAllSkill();

  if (isLoading || error) {
    return (
      <div>
        <input
          placeholder="No skills found"
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>
    );
  }

  return (
    <Autocomplete
      disablePortal
      options={data || []}
      sx={{ width: 300 }}
      getOptionLabel={(option: { skillId: string; skillName: string }) =>
        option.skillName
      }
      onChange={(_, value) => {
        if (value) {
          console.log(value.skillId);
          onSelectSkill(value);
        }
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          required={required}
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#B0BEC5" },
              "&:hover fieldset": { borderColor: "#90A4AE" },
              "&.Mui-focused fieldset": { borderColor: "#78909C" },
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
