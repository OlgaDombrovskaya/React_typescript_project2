
import React, { useState, type JSX } from 'react';
import { Container, Input, Btn, Title, List } from './styles';

// Тип для задачи
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};
// Это TypeScript тип.
// Описывает объект задачи:
// id — уникальный номер
// text — текст задачи
// completed — выполнена ли задача (true/false)

function TodoList(): JSX.Element {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const addTodo = (): void => {
    if (inputValue.trim() === '') return;
    // Проверка: если строка пустая — не добавлять ничего

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };
  // Добавляем новую задачу в список (spread копирует старые + новая)
  // Очищаем поле ввода

  const toggleTodo = (id: number): void => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  // Здесь мы проходим по всем задачам.
  // eslint-disable-next-line max-len
  // Если задача с нужным id — меняем её поле completed на противоположное (true → false, или false → true).
  // Это позволяет отмечать задачу как выполненную или вернуть её в список невыполненных.

  const removeTodo = (id: number): void => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  // .filter(...) — метод массива, который возвращает новый массив, содержащий только те элементы, которые проходят условие.
  // todo.id !== id — оставляем все задачи, id которых не равен переданному.
  // То есть, мы исключаем ту задачу, которую хотим удалить.

  return (
    <Container>
      <Title>Список задач</Title>

      <Input
        type="text"
        value={inputValue}
        placeholder="Новая задача"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)}
      />
      {/* onChange={...} — атрибут JSX, указывающий, что делать при событии изменения значения в поле.
      (e: React.ChangeEvent<HTMLInputElement>) => ... — это стрелочная функция, которая принимает параметр e — объект события (event).
      Здесь мы используем типизацию TypeScript, чтобы сказать, что e — это событие изменения (ChangeEvent), пришедшее от элемента <input> (HTMLInputElement).
      setInputValue(e.target.value) — внутри функции мы вызываем функцию обновления состояния setInputValue, передавая ей новое значение из поля ввода. */}

      {/* Что такое e.target.value?
    e — объект события.
    e.target — элемент, на котором произошло событие (в нашем случае — поле <input>).
    e.target.value — текущий текст, который ввёл пользователь в поле. */}

      <Btn type="button" onClick={addTodo}>
        Добавить
      </Btn>

      <List>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '8px',
              }}
            >
              {todo.text}
            </span>
            <Btn type="button" onClick={() => removeTodo(todo.id)}>
              Удалить
            </Btn>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default TodoList;
