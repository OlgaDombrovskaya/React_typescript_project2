import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  display: flex;
  justify-content: center;
  margin: 20px;
  &::placeholder {font-size: 20px;}
`;

export const Btn = styled.button`
  margin: 15px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid yellowgreen;
  color: aliceblue;
  background-color: rgb(128, 17, 225);
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const List = styled.ul`
  text-align: center;
`;
