import { ContactFormContainer, InputsContainer, Title } from "./styles";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_FORM_VALUES } from "./types";

// Вадидация с помощью yup — ключи через enum
function ContactUs() {
  const validationSchema = Yup.object().shape({
    [CONTACT_FORM_VALUES.FULL_NAME]: Yup.string()
      .required("Full name is required")
      .min(3, "Minimum 3 characters")
      .max(50, "Maximum 50 characters"),
    [CONTACT_FORM_VALUES.PHONE]: Yup.string()
      .required("Phone is required")
      .min(4, "Minimum 4 characters")
      .max(20, "Maximum 20 characters"),
    [CONTACT_FORM_VALUES.EMAIL]: Yup.string()
      .min(6, "Minimum 6 characters")
      .max(60, "Maximum 60 characters")
      .email("Invalid email format")
      .notRequired(),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_FORM_VALUES.PHONE]: "",
      [CONTACT_FORM_VALUES.EMAIL]: "",
    },
    validationSchema,
    validateOnChange: false, // проверяем только на submit
    onSubmit: (values) => {
      console.log("SEND REQUEST payload:", values);
    },
  });

  // Вопрос: нужно ли добавить noValidate (отключение встроенной валидацию браузера), ведь за валидацию полностью отвечает Formik + Yup.
  // ведь может сработать нативная валидация браузера ещё до Formik, и это иногда «мешает» (например, Chrome пишет свои ошибки на английском)
  return (
    <ContactFormContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>

      <InputsContainer>
        <Input
          id="full-name-id"
          name={CONTACT_FORM_VALUES.FULL_NAME}
          label="Full name*"
          placeholder="Your full name"
          value={formik.values[CONTACT_FORM_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.FULL_NAME]}
        />

        <Input
          id="phone-id"
          name={CONTACT_FORM_VALUES.PHONE}
          label="Phone*"
          placeholder="Your phone number"
          value={formik.values[CONTACT_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.PHONE]}
        />

        <Input
          id="email-id"
          name={CONTACT_FORM_VALUES.EMAIL}
          type="email"
          label="Email"
          placeholder="Your email"
          value={formik.values[CONTACT_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.EMAIL]}
        />
      </InputsContainer>

      <Button type="submit" name="SEND REQUEST" />
    </ContactFormContainer>
  );
}

export default ContactUs;
