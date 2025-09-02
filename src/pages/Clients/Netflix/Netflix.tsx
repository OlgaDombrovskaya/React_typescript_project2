import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../styles";

export default function Netflix() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <PageWrapper>
            <h1>Netflix</h1>
            <p>Мировой лидер в стриминговом видеоконтенте: фильмы, сериалы, документалки.</p>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}