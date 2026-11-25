import { useState, useCallback } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name, value) {
  const text = value.trim();

  if (text === "") {
    return "Este campo é obrigatório";
  }
  if (name === "email" && !EMAIL_PATTERN.test(text)) {
    return "Insira um e-mail válido";
  }
  if (name === "name" && (text.length < 2 || text.length > 30)) {
    return "O nome deve ter de 2 a 30 caracteres";
  }
  return "";
}

function useFormValidation(initialValues) {
  const [initial] = useState(initialValues);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  const isValid = Object.keys(values).every(
    (field) => validateField(field, values[field]) === "",
  );

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initial);
    setErrors({});
  }, [initial]);

  return { values, errors, isValid, handleChange, resetForm };
}

export default useFormValidation;
