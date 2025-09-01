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
выполните новый GET запрос на http://universities.hipolabs.com/search?country=COUNTRY_NAME и получите новые данные, и обновите стейт
При получении ошибки, положите в отдельный стейт 
данные об ошибке с соббщением "Some Network Error"

Стили на ваше усмотрение, контент тоже на ваше усмотрение
Все нужно делать в компоненте Lesson_10
*/

import { useState } from "react";
import getUniversities  from "./data";
import Button from "components/Button/Button";
import axios, { AxiosError } from "axios";
import Input from "components/Input/Input";

const Lesson_10 = () => {
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [country, setCountry] = useState<string>("");

  const fetchUniversities = async () => {
    try {
      const response = await axios.get(
        `http://universities.hipolabs.com/search?country=${country}`
      );
      setUniversities(response.data);
    } catch (error) {
      setError("Some Network Error");
    }
  };

  return (
    <div>
      <Input
        id="country"
        name="country"
        placeholder="Enter Counry for searching uneversities"
        label="Country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <Button name="Get Universities" onClick={fetchUniversities} />
      {!!error && <p>{error}</p>}
      {universities.map((university: any) => (
        <p key={university.name}>{university.name}</p>
      ))}
    </div>
  );
};

export default Lesson_10;
