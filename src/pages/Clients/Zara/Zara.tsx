import { useNavigate } from "react-router-dom";
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl, CompanyTitle, CompanyDescription } from "../styles";

export default function Zara() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <PageWrapper>
            <CompanyTitle>Zara</CompanyTitle>
            <CompanyDescription>
                Международный бренд модной одежды с коллекциями для женщин, мужчин и
                детей.
            </CompanyDescription>
            <ButtonControl>
                <Button onClick={goBack} name="Go back" />
            </ButtonControl>
        </PageWrapper>
    );
}
