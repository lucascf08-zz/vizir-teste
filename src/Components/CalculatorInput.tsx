import { Autocomplete, TextField } from "@material-ui/core";
import { isPropertySignature } from "typescript";

interface autoCompleteProps {
  options: { label: string; value: string | number }[];
  label: string;

  onInputChange: (e: string) => void;
  inputValue: string;

  onChange: (e: { value: string | number; label: string }) => void;
  value: { value: string | number; label: string };
  multiple?: boolean;
}

interface multiAutoCompleteProps {
  options: { label: string; value: string | number }[];
  label: string;

  onChange: (val: { label: string; value: string | number }[]) => void;
  value: { value: string | number; label: string }[];
  multiple?: boolean;
  inputRef?: React.MutableRefObject<HTMLInputElement | undefined>;
}

const CalculatorInput = ({ ...props }: autoCompleteProps) => {
  return (
    <Autocomplete
      fullWidth
      isOptionEqualToValue={(o, v) => o.value === v.value}
      options={props.options}
      getOptionLabel={(option) => option.label}
      inputValue={props.inputValue}
      value={props.value}
      onChange={(e, val) =>
        val ? props.onChange(val) : props.onChange({ value: "", label: "" })
      }
      onInputChange={(e, val) => props.onInputChange(val)}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant="standard"
          value={props.value}
          color="secondary"
        />
      )}
    ></Autocomplete>
  );
};

export const MultiCalculatorInput = ({ ...props }: multiAutoCompleteProps) => {
  return (
    <Autocomplete
      openOnFocus
      multiple
      fullWidth
      options={props.options}
      getOptionLabel={(option) => option.label}
      value={props.value}
      onChange={(e, val) => props.onChange(val)}
      ref={props.inputRef}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          variant="standard"
          color="secondary"
        />
      )}
    />
  );
};

export default CalculatorInput;
