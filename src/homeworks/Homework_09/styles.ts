import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 10, 66, 0.9);
`;

export const Text = styled.p`
  font-size: 30px;
  color: black;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
`;

export const ContainerJokes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
`;

export const Btn = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 20px;
`;
