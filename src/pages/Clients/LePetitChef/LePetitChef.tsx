import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../styles";

export default function LePetitChef() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <PageWrapper>
            <h1>Le Petit Chef</h1>
            <p>Уникальный гастрономический опыт: кулинарное шоу с 3D-проекцией прямо на тарелке.</p>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}