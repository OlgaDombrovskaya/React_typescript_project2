import { type InputProps } from "./types";
import { InputComponent, InputLabel, InputWrapper } from "./styles.ts";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $hasError={error}
      />
    </InputWrapper>
  );
}

export default Input;
