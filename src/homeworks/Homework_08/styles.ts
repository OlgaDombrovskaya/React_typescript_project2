import styled from "@emotion/styled";

// возвращает стилизованный компонент
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px;
`;

export const Paragraph = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: red;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;