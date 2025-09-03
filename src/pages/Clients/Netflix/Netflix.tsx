import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl, CompanyTitle, CompanyDescription } from "../styles";

export default function Netflix() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <PageWrapper>
            <CompanyTitle>Netflix</CompanyTitle>
            <CompanyDescription>Мировой лидер в стриминговом видеоконтенте: фильмы, сериалы, документалки.</CompanyDescription>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}