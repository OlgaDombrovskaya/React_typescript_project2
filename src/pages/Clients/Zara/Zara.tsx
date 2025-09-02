import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../styles";

export default function Zara() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <PageWrapper>
            <h1>Zara</h1>
            <p>
                Международный бренд модной одежды с коллекциями для женщин, мужчин и
                детей.
            </p>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}
