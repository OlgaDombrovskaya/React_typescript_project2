// Описываем тип одной задачи. Это помогает TypeScript проверять поля.
// id: уникальный идентификатор; text: текст задачи; completed: флаг "выполнено".

import { useState } from "react";
import { Page, Container, Title, InputRow, Input, Button, TodoList, TodoItem, TodoText, DeleteButton } from "./styles";

type Todo = {
id:number;
text:string;
completed: boolean;
}

// Объявляем функциональный компонент TodoApp и делаем его экспортом по умолчанию.


export default function TodoApp() {
// Локальное состояние со списком задач.
  // useState<Todo[]>([]) — дженерик указывает, что это массив Todo; изначально пустой.
const [todos,setTodos] = useState<Todo[]>([]);
// Второе состояние — значение текстового поля (контролируемый инпут).
const [input,setInput] = useState("");

// Функция добавления задачи.
const addTodo = ()=>{
  // trim() убирает пробелы по краям; если строка пустая — просто выходим, ничего не добавляем.
  if(input.trim()=== "") return;
   // Собираем объект новой задачи. id упрощённо берём через Date.now() (в миллисекундах).
   const newTodo: Todo = {id:Date.now(), text: input, completed:false};
// Обновляем список задач НОВЫМ массивом (соблюдаем иммутабельность).
    // Распаковываем старые задачи и добавляем новую в конец.
  setTodos([...todos, newTodo]);
  // Сбрасываем поле ввода.
  setInput("");
}
// Функция переключения статуса "выполнено/не выполнено" по id.
const toggleTodo = (id:number)=>{
  setTodos(
    // Создаём новый массив на основе старого через map.
    
     todos.map((todo)=>todo.id === id ? {...todo, completed: !todo.completed}: todo)
    // Если id совпал — возвращаем копию объекта с инвертированным completed.
    /* условие ? если_истина : если_ложь.
      
    Если истина: { ...todo, completed: !todo.completed }
     ...todo — распыление: копируем все поля объекта todo в новый объект (поверхностная копия).
     completed: !todo.completed — переопределяем поле completed на противоположное значение (true → false, false → true). 
     В объекте в литерале последнее объявление свойства побеждает, поэтому completed после распыления перезаписывается.*/
     
  );
};
// Функция удаления задачи по id.
const deleteTodo = (id:number)=>{
  // filter вернёт новый массив без элемента с указанным id.
  setTodos(todos.filter((todo)=>todo.id !== id));
};
// Разметка компонента (JSX). Должен вернуть ОДИН корневой элемент — у нас это <Page>.
// vh  - видимая область экрана

  return (
    <Page> {/* Обёртка-страница. Обычно в styles.ts у неё flex-центрирование и min-height: 100vh */}
      <Container> {/* "Карточка" формы: фон, скругления, тень */}
        <Title>To-Do List</Title> {/* Заголовок списка */}

        {/* Горизонтальная панель с инпутом и кнопкой */}
        <InputRow>
          <Input
            type="text"
            // Значение берём из состояния input — это делает поле "контролируемым".
            value={input}
            // onChange обновляет состояние при каждом вводе.
            // e.target.value — текущий текст в инпуте.
            onChange={(e) => setInput(e.target.value)}
            placeholder="Введите задачу..."
          />
          {/* Кнопка добавляет новую задачу, вызывая addTodo */}
          <Button onClick={addTodo}>Добавить</Button>
        </InputRow>

        {/* Список задач */}
        <TodoList>
          {/* Пробегаемся по массиву todos и для каждой задачи рендерим элемент */}
          {todos.map((todo) => (
            // key нужен React для корректного обновления списков.
            <TodoItem key={todo.id}>
              {/* Текст задачи. По клику — переключаем completed. */}
              {/* Проп completed пробрасывается в стили (через Emotion) для, например, зачёркивания текста. */}
              <TodoText
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </TodoText>

              {/* Кнопка удаления — по клику удаляем текущую задачу */}
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Удалить
              </DeleteButton>
            </TodoItem>
          ))}
        </TodoList>
      </Container>
    </Page>
  );
}

