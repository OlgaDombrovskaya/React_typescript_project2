import { PageWrapper, CompanyTitle } from "../styles";
import ClientTemplate from "pages/component/ClientTemplate/ClientTemplate";

function Netflix() {
  return (
    <PageWrapper>
      <CompanyTitle>Netflix</CompanyTitle>
      <ClientTemplate>
        Мировой лидер в стриминговом видеоконтенте: фильмы, сериалы,
        документалки.
      </ClientTemplate>
    </PageWrapper>
  );
}

export default Netflix;
