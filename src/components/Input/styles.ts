import styled from "@emotion/styled";

/*Расширьте компонент Input:
он должен принимать в себя пропсу disabled. Если disabled === true, то Input становится серым 
и в него ничего нельзя вводить. Если disabled === false, то выглядит и работает в обычном режиме.
он должен принимать в себя просу error. error должен быть undefined или строкой. 
Если error === "Some error", то у Input границы становится красные. Если error === undefined, 
то выглядит и работает в обычном режиме.*/

interface InputComponentProps {
  $hasError?: string | undefined;
}

const generateBorderColor = (
  hasError: string | undefined,
  disabled: boolean | undefined
) => {
  if (disabled) {
    return "#e0e0e0";
  } else {
    if (!!hasError) {
      return "#e53935";
    } else {
      return "#3f3f3f";
    }
  }
};

const generateBorderColorOnFocus = (
  hasError: string | undefined,
  disabled?: boolean | undefined
): string => {
  if (disabled) {
    return "#e0e0e0";
  } else {
    if (!!hasError) {
      return "#e53935";
    } else {
      return "#6f6f6f";
    }
  }
};

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  border: 1px solid
    ${({$hasError, disabled }) => generateBorderColor($hasError, disabled)};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &:focus {
    border-color: ${({ $hasError, disabled }) =>
      generateBorderColorOnFocus($hasError, disabled)};
  }

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
