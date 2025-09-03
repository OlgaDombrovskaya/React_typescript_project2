import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl, CompanyTitle, CompanyDescription } from "../styles";

export default function LePetitChef() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <PageWrapper>
            <CompanyTitle>Le Petit Chef</CompanyTitle>
            <CompanyDescription>Уникальный гастрономический опыт: кулинарное шоу с 3D-проекцией прямо на тарелке.</CompanyDescription>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}