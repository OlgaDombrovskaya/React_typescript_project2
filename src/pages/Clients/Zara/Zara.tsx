import { PageWrapper, CompanyTitle} from "../styles";
import ClientTemplate from "pages/component/ClientTemplate/ClientTemplate";

function Zara() {
    return (
        <PageWrapper>
            <CompanyTitle>Zara</CompanyTitle>
            <ClientTemplate>
                Международный бренд модной одежды с коллекциями для женщин, мужчин и
                детей.
            </ClientTemplate>
        </PageWrapper>
    );
}
export default Zara;
