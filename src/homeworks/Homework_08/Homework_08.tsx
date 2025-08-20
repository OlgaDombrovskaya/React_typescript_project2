/*Создайте компонент Homework08 и импортируйте в него Input и Button.
 Отобразите все варианты Button и Input, в зависимости от того какие значения вы прокините в их пропсы
 (у Button - это disabled и isRed, у Input - это disabled и error)*/

import Button from "components/Button/Button";
// import Input from "components/Input/Input";

import {
  PageWrapper,
  Paragraph,
  ButtonControl,
  Box1,
  Box2,
  Box3,
} from "../../lessons/Lesson_08/styles";

// import { Lesson_07_PageWraper } from "../../lessons/Lesson_07/styles";

function Homework_08() {
  return (
    <PageWrapper>
      <Paragraph>Homework_08</Paragraph>
      {/* ==== Button===== */}
      <ButtonControl>
        <Button name="Simple Button" />
      </ButtonControl>

      <ButtonControl>
        {/* <Button isRed={true} name="Delete Button" /> */}
        <Button isRed name="Delete Button" />
      </ButtonControl>

      <ButtonControl>
        <Button
          disabled
          isRed
          name="Disabled Button"
          onClick={() => {
            console.log("Button Works");
          }}
        />
      </ButtonControl>

      {/* ==== Input===== */}

      {/* <Lesson_07_PageWraper>
        <Button name="Send" onClick={sendDataToServer} />
        <Input
          id="test-id"
          name="test"
          label="Test Label"
          placeholder="Test placeholder"
        />
        <Counter onMinus={onMinus} onPlus={onPlus} count={count} />
      </Lesson_07_PageWraper> */}

      <Box1>Box 1</Box1>
      <Box2>Box 2</Box2>
      <Box3>Box 3</Box3>
    </PageWrapper>
  );
}

export default Homework_08;
