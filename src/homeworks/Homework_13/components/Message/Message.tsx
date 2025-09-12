//Компонент Message.tsx должен отбражать сообщение из стейта,
// которое вы кладете при клике на кнопку "Запостить"

import { useContext } from "react";
import { BMContext } from "homeworks/Homework_13/components/BlogManagement/BlogManagement";
import { MessageBox, MessageText, MessageEmpty, MessageTitle } from "./styles";

function Message() {
  const message = useContext(BMContext);

  return (
    <MessageBox>
      <MessageTitle>Message:</MessageTitle>
      {message ? (
        <MessageText>{message}</MessageText>
      ) : (
        <MessageEmpty>Сообщение пока не опубликовано.</MessageEmpty>
      )}
    </MessageBox>
  );
}

export default Message;
