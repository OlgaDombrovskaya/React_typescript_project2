/*
Разместите на странице Input с label="Country", 
placeholder="Enter Counry for searching uneversities", 
в который пользователь может ввести название страны 
для посика университетов

Разместите на странице Button "Get Universities", 
по клику на которую, отправляется GET запрос на 
http://universities.hipolabs.com/search?country=COUNTRY_NAME 

Используйте для запросов axios
Если в ответе на запрос пришли нормальные данные
(запрос выполнен успешно), то разместите данные в стейте, 
а затем отобразите на стрнице в виде каточек. 
Сохраняйте не более 15 обьектов в массиве в стейт 

При повторном нажатии на кнопку "Get Universities", 
выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME 
и получите новые данные, и обновите стейт

При получении ошибки, положите в отдельный стейт 
данные об ошибке с соббщением "Some Network Error" 
Стили на ваше усмотрение, контент тоже на ваше усмотрение
Отобразите ошибку на странице вместо карточек с университетами
Все нужно делать в компоненте Lesson_10
*/

import { PageWrapper, Text, Card, ContainerInside, Error } from "./styles";

import { useState } from "react";
import { v4 } from "uuid";
import { getUniversities } from "./data";
import Button from "components/Button/Button";
import Input from "components/Input/Input";

const Lesson_10 = () => {
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const fetchUniversities = async () => {
    setError(null);
    setUniversities([]);
    setIsDisabled(true);
    try {
      const data = await getUniversities(country);
      if (data.length === 0) {
        setError(`No universities found for ${country}`);
      } else {
        setUniversities(data.slice(0, 15));
        setError(null);
      }
    } catch {
      setError("Some Network Error");
      setUniversities([]);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <PageWrapper>
      <Card>
        <Input
          id="country"
          name="country"
          placeholder="Enter Counry for searching uneversities"
          label={
            <span style={{ fontSize: 30, fontWeight: "bold", color: "black" }}>
              Country
            </span>
          }
          onChange={(event: any) => setCountry(event.target.value)}
        />
        <ContainerInside>
          {!!error && <Error>{error}</Error>}
          <div>
            {universities.map((university: any) => (
              <Text style={{ color: "blue" }} key={v4()}>
                <li style={{ padding: 8 }}>{university.name}</li>
              </Text>
            ))}
          </div>
        </ContainerInside>
        <Button
          disabled={isDisabled}
          name="Get Universities"
          type="button"
          onClick={fetchUniversities}
        ></Button>
      </Card>
    </PageWrapper>
  );
};

export default Lesson_10;
