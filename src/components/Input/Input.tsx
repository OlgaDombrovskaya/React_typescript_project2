import { type InputProps } from "./types";
import { InputComponent, InputLabel, InputWrapper, ErrorText } from "./styles.ts";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
  value,
  onChange,
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
        value={value}
        onChange={onChange}
      />
      
       {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}
// условный рендеринг 

export default Input;
