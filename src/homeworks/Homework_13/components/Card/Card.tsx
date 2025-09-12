//карточка, в которой будет уже вписанно ваше имя и фамлиия
//под именем и фамилией вы должны возвращать компонент Message

import Message from "../Message/Message";
import { CardBox, CardHeader, AvatarImg, Name } from "./styles";
import avatar from "assets/IMG_avatar.jpg";

function Card() {
  return (
    <CardBox>
      <CardHeader>
        <AvatarImg src={avatar} alt="Olga Dombrovskaya avatar" />
        <Name>Olga Dombrovskaya</Name>
      </CardHeader>
      <Message />
    </CardBox>
  );
}

export default Card;
