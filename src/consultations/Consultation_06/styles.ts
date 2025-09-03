import styled from "@emotion/styled";

export const Container = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 12px;
  background: #f9f9f9;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

 export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 14px;
`;

export const Button = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;

  &:hover {
    background: #0056b3;
  }
`;

export const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 8px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  border: 1px solid #ddd;
`;

export const TodoText = styled.span<{ completed: boolean }>`
  cursor: pointer;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#888" : "#000")};
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  color: #d11a2a;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
export const Page = styled.div`
  display: flex;
  justify-content: center;  /* центр по горизонтали */
  align-items: center;      /* центр по вертикали */
  min-height: 100vh;        /* высота окна браузера */
  width: 100vw;             /* ширина окна */
  background: #eef1f5;
`;