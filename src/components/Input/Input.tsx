import { type InputProps } from "./types";
import { InputComponent, InputLabel, InputWrapper } from "./styles.ts";

function Input({ id, name, type = "text", placeholder, label }: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

export default Input;
