import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";

interface stdSelectProps {
  value: string | number;
  label: string;
  onChange: Dispatch<SetStateAction<string>>;

  options: { label: string; value: string }[];
  multiple?: boolean;
}

export const StdSelect = ({ ...props }: stdSelectProps) => {
  return (
    <TextField
      select
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      label={props.value === "" && props.label}
      color="secondary"
      variant="standard"
      InputProps={{ disableUnderline: true }}
      InputLabelProps={{ shrink: false }}
    >
      {props.options.map((o, i) => (
        <MenuItem key={i} value={o.value}>
          {o.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

interface stdMultiSelectProps {
  value: string[];
  label: string;
  onChange: Dispatch<SetStateAction<string[]>>;

  options: { label: string; value: string }[];
  multiple?: boolean;
}

export const StdMultiSelect = ({ ...props }: stdMultiSelectProps) => {
  const option = props.value;
  const handleChange = (event: SelectChangeEvent<typeof option>) => {
    const {
      target: { value },
    } = event;
    props.onChange(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl>
      <InputLabel shrink={false} id={`${props.label}-select`} color="secondary">
        {props.value.length > 0 ? "" : props.label}
      </InputLabel>
      <Select
        disableUnderline
        labelId={`${props.label}-select`}
        multiple
        value={props.value}
        onChange={handleChange}
        color="secondary"
        variant="standard"
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip
                key={value}
                label={props.options.find((o) => o.value === value)?.label}
              />
            ))}
          </Box>
        )}
      >
        {props.options.map((o, i) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
