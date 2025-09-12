//textarea(отдельным компонентом делать не нужно) - в которую вы будете вводить сообщение,
// которое хотите запостить в своем блоге
//кнопка "Запостить", при клике на которую вы кладете данные в отдельный стейт
//в этом компоненте вы должны возвращать компонент Card

import { createContext, useState, type ChangeEvent } from "react";
import Button from "components/Button/Button";
import Card from "../Card/Card";
import { BMWrapper, BMTitle, BMTextarea } from "./styles";

export const BMContext = createContext<string | undefined>(undefined);

function BlogManagement() {
  const [textValue, setTextValue] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const onChangeMessage = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const onPost = () => {
    setMessage(textValue);
  };

  return (
    <BMContext.Provider value={message}>
      <BMWrapper>
        <BMTitle>My Blog</BMTitle>
        <BMTextarea
          name="message"
          placeholder="Ввести сообщение для блога…"
          value={textValue}
          onChange={onChangeMessage}
        />
        <Button name="Запостить" onClick={onPost} />
        <Card />
      </BMWrapper>
    </BMContext.Provider>
  );
}
export default BlogManagement;
