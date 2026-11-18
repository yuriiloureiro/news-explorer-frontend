import { useState } from "react";
import Modal from "../Modal/Modal";
import useFormValidation from "../../hooks/useFormValidation";

function LoginModal({ onClose, onSwitch, onLogin }) {
  const { values, errors, isValid, handleChange } = useFormValidation({
    email: "",
    password: "",
  });
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitError("");
    setIsSubmitting(true);

    onLogin(values)
      .catch((message) => setSubmitError(String(message)))
      .finally(() => setIsSubmitting(false));
  }

  return (
    <Modal onClose={onClose}>
      <h2 className="modal__title">Entrar</h2>
      <form className="modal__form" onSubmit={handleSubmit} noValidate>
        <label className="modal__field">
          <span className="modal__field-label">E-mail</span>
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Inserir e-mail"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className="modal__error">{errors.email}</span>}
        </label>
        <label className="modal__field">
          <span className="modal__field-label">Senha</span>
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Inserir senha"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="modal__error">{errors.password}</span>
          )}
        </label>
        {submitError && <span className="modal__error">{submitError}</span>}
        <button
          className="modal__submit"
          type="submit"
          disabled={!isValid || isSubmitting}
        >
          Entrar
        </button>
      </form>
      <p className="modal__footer">
        ou{" "}
        <button className="modal__link" type="button" onClick={onSwitch}>
          Inscreva-se
        </button>
      </p>
    </Modal>
  );
}

export default LoginModal;
