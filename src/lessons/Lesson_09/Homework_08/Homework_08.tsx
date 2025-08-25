import { useState } from "react";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { PageWrapper, ElementControl, Text } from "./styles";
import { generateNumber } from "./data";

function Homework_08() {
  // вопрос был: зачем нам в useState хранить функции колбэк в качестве значений по умолчанию. (редко используется, но для оптимизации применяется)
  // Так делать нельзя, т.к это действие приведет к лишним вызовам функции generateNumber() 
  // при каждом перерендере компонента Homework_08
  // const number = generateNumber();
  const [generatedValue, setGeneratedValue] = useState(generateNumber); //  В таком варианте
  // (когда мы передаем в useState  в качестве значения по умолчанию функцию callback, 
  // она вызвается только 1 раз при первичном рендере, при повторных рендерах, она не вызвается, 
  // вызвать ее можно только через setGeneratedValue)
  const [count, setCount] = useState<number>(0);

  return (
    <PageWrapper>
      <ElementControl>
        <Button name="Simple Button" />
      </ElementControl>
      <ElementControl>
        <Button isRed name="Delete Button" />
      </ElementControl>
      <ElementControl>
        <Button disabled name="Disabled Button" />
      </ElementControl>
      <ElementControl>
        <Input
          id="simple_input"
          name="simple"
          placeholder="Simple input element"
          label="Simple Input"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="error_input"
          name="error"
          placeholder="Error input element"
          label="Error Input"
          error="Some Network Error"
        />
      </ElementControl>
      <ElementControl>
        <Input
          id="disabled_input"
          name="disabled"
          placeholder="Disabled input element"
          label="Disabled Input"
          disabled
        />
      </ElementControl>
      <Text>{count}</Text>
      <ElementControl>
        <Button
          name="Add"
          onClick={() => setCount((prevValue) => prevValue + 1)}
        />
      </ElementControl>
      <Text>Сгенерированное число: {generatedValue}</Text>
    </PageWrapper>
  );
}

export default Homework_08;
