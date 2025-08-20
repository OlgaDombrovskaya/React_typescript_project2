/*Создайте компонент Homework08 и импортируйте в него Input и Button.
 Отобразите все варианты Button и Input, в зависимости от того какие значения вы прокините в их пропсы
 (у Button - это disabled и isRed, у Input - это disabled и error)*/

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, Paragraph, ButtonControl } from "./styles";

function Homework_08() {
  return (
    <PageWrapper>
      <Paragraph>Homework_08</Paragraph>
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>
      <ButtonControl>
        <Button isRed name="Delete Button" />
      </ButtonControl>
      <ButtonControl>
        <Button disabled name="Disabled Button" />
      </ButtonControl>

      <ButtonControl>
        <Input
          id="simple_input"
          name="simple"
          label="Simple input"
          placeholder="Simple input element"
        />
      </ButtonControl>
      <ButtonControl>
        <Input
          id="error_input"
          name="error"
          label="Error input"
          placeholder="Error input element"
          error="Some Network Error"
        />
      </ButtonControl>

      <ButtonControl>
        <Input
          id="disabled_input"
          name="disabled"
          label="Disabled input"
          placeholder="Disabled input element"
          disabled
        />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Homework_08;
