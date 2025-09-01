// import { type FormEvent, type ChangeEvent, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { LOGIN_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, Title } from "./styles";

function LoginForm() {
  // Пример работы с контролируемыми элементами на странице
  // const [inputValue, setInputValue] = useState<string>("");

  // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
  //   // event.taget.value - это то, что ввел пользователь с клавиатуры в input элементе
  //   setInputValue(event.target.value);
  // };

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(event.target.value);
  // };

  // const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };

  // const login = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("Email:", email);
  //   console.log("Password:", password);
  // };

  ///////////////////////////////////////////////////////////////////////////////////////
  // Вадидация с помощью yup
  const validationSchema = Yup.object().shape({
    [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
      .required("Email field is required")
      .email("This field should be in email format"),
    [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
      .required("Password field is required")
      .min(5, "Password field should contain minimum 5 characters")
      .max(20, "Passwod field should contain maximum 20 characters"),
  });
  ////////////////////////////////////////////////////////////////////////////////////////
  // useFormik возвращает обьект, в котором прописанные необходимые данные о форме и вспомогательные функции для работы с формой
  // useFormik принимает в качестве аргумента обьект - он является обязательным
  // обьект который мы передаем useFormik нужен для настройки обьекта, который возвращает хук useFormik
  // обьект, который мы передаем useFomik имеет 2 обязательных ключа:
  // 1. initialValues - принимат в качестве значения обьект:
  // - в качестве ключа у нас выступает значение атрубута name в элементах формы
  // - в качестве значения ключа мы прописывает значение по умолчанию, которое должно быть в элеиенте формы
  // 2. onSubmit - это функция, которая вызывается на событие submit(при клике на кнопку с type="submit")
  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema: validationSchema,
    validateOnMount: false,
    validateOnChange: false,
    onSubmit: (values, helpers) => {
      // values - это обьект, ключи которого явлются значение атприбута name у элементов формы, а значение ключа - это то что ввел пользователь в наших элементах формы
      console.log(values);
      // Вспомогательные функции, которые мы можем использовать во время события submit
      // например helpers.resetForm() -  очищает форму от значений(т.е делает занчения формы по умолчанию)
      console.log(helpers);
      // helpers.resetForm();
      console.log("Submit from formik works!!!");
    },
  });

  console.log(formik);

  return (
    // formik.handleSubmit - мы прописывает для того, чтобы когда мы нажали на кнопку c type="submit",
    //  у нас вызвалась функция, которую мы прописали в onSubmit
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email"
          // formik.values.email - мы прописываем, чтобы элемент формы получил значение
          // которое пользователь вводит с клавиатуры
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          // formik.handleChange - помогает контрлировать ввод пользователя данных с клавиатуры
          // и когда пользователь что-то вводит, то formik.handleChange записывает данные в formik.values.email
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />
        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>
      {/* <input value={inputValue} onChange={changeInputValue} /> */}
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}

export default LoginForm;
