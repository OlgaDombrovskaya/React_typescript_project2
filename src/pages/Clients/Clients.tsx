import { useEffect } from "react";
import { CompanyLink, CompanyList, PageWrapper, Title } from "./styles"; 
import { ROUTES } from "constants/routes"

function Clients() {
useEffect(() => {
    // Unmounting
    return () => {
      console.log("Unmounting Clients Component");
    };
  }, []);

  return (
    <PageWrapper>
      <Title>Clients</Title>
      <CompanyList>
          <CompanyLink to={ROUTES.NETFLIX}>Netflix</CompanyLink>
          <CompanyLink to={ROUTES.ZARA}>Zara</CompanyLink>
          <CompanyLink to={ROUTES.LE_PETIT_CHEF}>Le Petit Chef</CompanyLink>
      </CompanyList>
    </PageWrapper>
  );
}

export default Clients;
