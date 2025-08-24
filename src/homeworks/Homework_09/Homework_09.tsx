/*Создайте компоент Homework_09. В нем вам нужно будет сделать следующее:

при монтировании компонента Homework_09, сделайте GET запрос на api сервис: https://official-joke-api.appspot.com/random_joke
Если запрос выполниться успешно, то положите данные со случайными шутками в state и отобразите их в карточке.

Если запрос выполнится с ошибкой, создайте стейт с ошибкой и положите туда строку "Some Network Error"

добавьте на страницу кнопку, при клике на которую выполняется новый запрос на https://official-joke-api.appspot.com/random_joke и при ответе обновляется стейт с ошибкой или стейтом с полученными данными
стили на ваши усмотрение*/

import { PageWrapper, ContainerJokes, Card, Text, Btn } from "./styles";

import { useEffect, useState } from "react";

function Homework_09() {
  const JOKE_API_URL: string =
    "https://official-joke-api.appspot.com/random_joke";
  const [Joke, setJoke] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);

  const getApiService = async () => {
    const response = await fetch(JOKE_API_URL, {
      method: "GET",
    });

    const result = await response.json();

    if (response.ok) {
      setJoke(`${result.setup} ${result.punchline}`);
      setError(undefined);
    } else {
      setJoke(undefined);
      setError("Some Network Error");
    }
  };

  useEffect(() => {
    getApiService();
  }, []);

  return (
    <PageWrapper>
      <Card>
        <ContainerJokes>
          <Text>{error ? error : Joke}</Text>
        </ContainerJokes>
        <Btn type="button" onClick={getApiService}>Get new joke</Btn>
      </Card>
    </PageWrapper>
  );
}

export default Homework_09;
