//Архетиктурное решение чтобы кнопка goback могла меняться в одном месте и кода меньше
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { PageWrapper, Description, ButtonControl } from "./styles";
import { type ClientTemplateProps } from "./types";

function ClientTemplate({ children }: ClientTemplateProps) {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };

  return (
    <PageWrapper>
      <Description>{children}</Description>
      <ButtonControl>
        <Button name="Go back" onClick={goback} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default ClientTemplate;