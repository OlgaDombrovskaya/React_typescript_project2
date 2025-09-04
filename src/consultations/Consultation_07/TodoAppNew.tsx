// TodoApp.tsx
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { type Todo, TODO_FORM_VALUES } from "./types";
import {
  Page,
  Container,
  Title,
  InputRow,
  Input,
  Button,
  TodoList,
  TodoItem,
  TodoText,
  DeleteButton,
  ErrorText,
} from "./styles";

// Интерфейс для значений формы
interface TodoFormValues {
  [TODO_FORM_VALUES.TEXT]: string;
}

export default function TodoAppNew() {
  // Локальное состояние со списком задач
  const [todos, setTodos] = useState<Todo[]>([]);

  // Схема валидации с помощью Yup
  const validationSchema = Yup.object().shape({
    [TODO_FORM_VALUES.TEXT]: Yup.string()
      .trim()
      .min(1, "Задача не может быть пустой")
      .max(100, "Задача слишком длинная")
      .required("Введите задачу"),
  });

  // Используем Formik для управления формой
  const formik = useFormik<TodoFormValues>({
    initialValues: {
      [TODO_FORM_VALUES.TEXT]: "",
    },
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, { resetForm }) => {
      // Добавляем новую задачу
      const newTodo: Todo = {
        id: Date.now(),
        text: values[TODO_FORM_VALUES.TEXT].trim(),
        completed: false,
      };

      setTodos([...todos, newTodo]);
      resetForm(); // Сбрасываем форму после отправки
    },
  });

  // Функция переключения статуса выполнения задачи
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Функция удаления задачи
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id !== id));
  };

  // Получаем статистику по задачам
  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo: Todo) => todo.completed).length;
  const remainingTodos = totalTodos - completedTodos;

  return (
    <Page>
      <Container>
        <Title>To-Do List</Title>

        {/* Форма с использованием Formik */}
        <form onSubmit={formik.handleSubmit}>
          <InputRow>
            <Input
              type="text"
              name={TODO_FORM_VALUES.TEXT}
              placeholder="Введите задачу..."
              value={formik.values[TODO_FORM_VALUES.TEXT]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              hasError={!!(formik.touched[TODO_FORM_VALUES.TEXT] && formik.errors[TODO_FORM_VALUES.TEXT])}
            />
            <Button 
              type="submit" 
              disabled={!formik.isValid || formik.isSubmitting}
            >
              Добавить
            </Button>
          </InputRow>
          
          {/* Отображение ошибки валидации */}
          {formik.touched[TODO_FORM_VALUES.TEXT] && formik.errors[TODO_FORM_VALUES.TEXT] && (
            <ErrorText>{formik.errors[TODO_FORM_VALUES.TEXT]}</ErrorText>
          )}
        </form>

        {/* Список задач */}
        <TodoList>
          {todos.map((todo: Todo) => (
            <TodoItem key={todo.id}>
              <TodoText
                completed={todo.completed}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </TodoText>
              <DeleteButton onClick={() => deleteTodo(todo.id)}>
                Удалить
              </DeleteButton>
            </TodoItem>
          ))}
        </TodoList>

        {/* Статистика */}
        {todos.length > 0 && (
          <div style={{ marginTop: '16px', textAlign: 'center', color: '#666' }}>
            Всего задач: {totalTodos} | 
            Выполнено: {completedTodos} |
            Осталось: {remainingTodos}
          </div>
        )}
      </Container>
    </Page>
  );
}
