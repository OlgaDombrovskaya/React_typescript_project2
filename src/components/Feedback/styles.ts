import styled from "@emotion/styled";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  gap: 30px;
  max-width: 600px;
  width: 100%;
  height: fit-content;
  border: 1px solid white;
  border-radius: 10px;
  padding: 30px;
  background-color: rgb(26, 35, 53);
  color: white;
`;
export const FeedbackControl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const ButtonWithcountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
export const Count = styled.p`
  font-size: 40px;
  color: white;
`; // я не поняла этот момент??????

// .image {
//   width: 100%;
//   height: 100%;
// }

// .image-control {
//   width: 70px;
//   height: 70px;
//   cursor: pointer;
// }
