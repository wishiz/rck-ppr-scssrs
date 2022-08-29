import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { nanoid } from "nanoid";
import { PERSONAS } from "../constants";
import { Persona } from "../types";
import { capitalizeWord } from "../helpers";

type Props = {
  persona: Persona;
  changeHandler: (e: SelectChangeEvent<Persona>) => void;
};

const SelectPersona = ({ persona, changeHandler }: Props) => {
  return (
    <FormControl fullWidth sx={{ minWidth: 200 }}>
      <InputLabel>Role</InputLabel>
      <Select value={persona} label="Role" onChange={changeHandler}>
        {PERSONAS.map((persona) => {
          const capitalizedPersona = capitalizeWord(persona);
          return (
            <MenuItem key={nanoid()} value={persona}>
              {capitalizedPersona}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default SelectPersona;
