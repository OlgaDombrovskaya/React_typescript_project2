import { useState, type JSX } from 'react'
import { Container, Btn, Title, Paragraph, Img } from "./styles.ts";

export default function Sandwich():JSX.Element {
    const [sandwich,setSandwich] = useState<string>("Бутербродный конфигуратор : ");
    function handleAddCheese():void {
        setSandwich(`${sandwich} СЫР 🧀`);
    }
    function handleAddTomato():void {
        setSandwich(`${sandwich} ПОМИДОР 🍅`);
    }
    function handleAddBread():void {
        setSandwich(`${sandwich} ХЛЕБ 🍞`);
    }
    function handleAddBacon():void {
        setSandwich(`${sandwich}БЕКОН 🥓 `);
    }
    function handleReset():void {
        setSandwich("Бутербродный конфигуратор : ");
    }
  return (
    <div>
      <Title>Sandwich</Title>
      <Img src="https://cropper.watch.aetnd.com/cdn.watch.aetnd.com/sites/2/2018/05/hungry-story-of-the-sandwich-iStock_000016810360Large.jpg" alt="" />
      <Paragraph>{sandwich}</Paragraph>
      <Container>
        <Btn onClick={handleAddCheese}>Добавить СЫР</Btn>
        <Btn onClick={handleAddTomato}>Добавить ПОМИДОР</Btn>
        <Btn onClick={handleAddBread}>Добавить ХЛЕБ</Btn>
        <Btn onClick={handleAddBacon}>Добавить  БЕКОН</Btn>
        <Btn onClick={handleReset}>Очистить</Btn>
      </Container>
    </div>
  )
}


 // создали переменную состояния counter
    // и функцию setCounter для изменения состояния
    // useState -  это хук
    // в круглых скобках начальное состояние переменной состояния
    // хук useState  принимает начальное значение переменной состояния
    // возвращает массив в котором на первом месте переменная состояния
    // а на втором месте функция  сетер
    
    // Хук - это функция которая используется только внутри компонента
    // В жизненном цикле компонента React есть 3 фазы:
    // Сборка (mounting)
    // Обновление (updating)
    // Разборка (unmounting)