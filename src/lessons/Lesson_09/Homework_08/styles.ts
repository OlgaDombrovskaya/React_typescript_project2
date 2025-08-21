import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  flex: 1;
  gap: 30px;
`;

export const ElementControl = styled.div`
  width: 300px;
`;

export const Text = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

// Можно достилизовать компонент: в данном примере мы берем все стили ElementControl в DeleteButtonControl + добавляем ствои стили
// export const DeleteButtonControl = styled(ElementControl)`
//   width: 400px;
// `;
