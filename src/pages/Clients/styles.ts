import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-bottom: 10px;
  color: rgba(51, 51, 51, 1);
`;

export const CompanyList = styled.ul`
  display: flex;
  padding: 0 60px;
  flex-direction: column;
  gap: 16px;
`;

export const CompanyTitle = styled.p`
  font-size: 40px;
  color: rgba(86, 19, 101, 1);
`;

export const CompanyDescription = styled.p`
  font-size: 26px;
`;

export const CompanyLink = styled.li`
  font-size: 20px;
  color: rgba(246, 8, 194, 1);
`;
