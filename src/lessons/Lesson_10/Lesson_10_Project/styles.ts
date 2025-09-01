import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 80px rgba(124, 16, 255, 1);
`;

export const ContainerInside = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: start;
`;

export const Text = styled.p`
  font-size: 15px;
  color: black;
`;

export const Error = styled.p`
  font-size: 20px;
  color: red;
`;