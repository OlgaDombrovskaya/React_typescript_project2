import { PageWrapper, CompanyTitle } from "../styles";
import ClientTemplate from "pages/component/ClientTemplate/ClientTemplate";

function LePetitChef() {
  return (
    <PageWrapper>
      <CompanyTitle>Le Petit Chef</CompanyTitle>
      <ClientTemplate>
        Уникальный гастрономический опыт: кулинарное шоу с 3D-проекцией прямо на
        тарелке.
      </ClientTemplate>
    </PageWrapper>
  );
}

export default LePetitChef;
