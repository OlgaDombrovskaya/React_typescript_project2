import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: lightgoldenrodyellow;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Container = styled.div`
  width: 90%;
  max-width: 400px;
  max-height: 90vh;
  padding: 20px;
  background-color: white;
  border: 2px solid lightpink;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

export const Heading = styled.h1`
  color: lightpink;
  text-align: center;
  margin: 0;
  font-size: 1.5rem;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(0.95); /* Гарантированное уменьшение */
  transform-origin: center;
`;
export const Btn = styled.button`
  padding: 10px 20px;
  background-color: lightpink;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: auto;
`;