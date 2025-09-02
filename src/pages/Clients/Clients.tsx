import { Link } from "react-router-dom";

import { CompanyLink, CompanyList, PageWrapper, Title } from "./styles";

function Clients() {
  return (
    <PageWrapper>
      <Title>Clients</Title>
      <CompanyList>
        <CompanyLink>
          <Link to="/clients/netflix">Netflix</Link>
        </CompanyLink>
        <CompanyLink>
          <Link to="/clients/zara">Zara</Link>
        </CompanyLink>
        <CompanyLink>
          <Link to="/clients/le_petit_chef">Le Petit Chef</Link>
        </CompanyLink>
      </CompanyList>
    </PageWrapper>
  );
}

export default Clients;
