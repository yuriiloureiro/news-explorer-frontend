import { useState } from "react";
import Modal from "../Modal/Modal";

function SignupModal({ onClose, onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const isFormFilled =
    email.trim() !== "" && password.trim() !== "" && name.trim() !== "";

  function handleSubmit(event) {
    event.preventDefault();
    // O cadastro será conectado na Fase 3, com a nossa API
  }

  return (
    <Modal onClose={onClose}>
      <h2 className="modal__title">Inscrever-se</h2>
      <form className="modal__form" onSubmit={handleSubmit} noValidate>
        <label className="modal__field">
          <span className="modal__field-label">E-mail</span>
          <input
            className="modal__input"
            type="email"
            name="email"
            placeholder="Inserir e-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label className="modal__field">
          <span className="modal__field-label">Senha</span>
          <input
            className="modal__input"
            type="password"
            name="password"
            placeholder="Inserir senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <label className="modal__field">
          <span className="modal__field-label">Nome de usuário</span>
          <input
            className="modal__input"
            type="text"
            name="name"
            placeholder="Inserir nome de usuário"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <button
          className="modal__submit"
          type="submit"
          disabled={!isFormFilled}
        >
          Inscrever-se
        </button>
      </form>
      <p className="modal__footer">
        ou{" "}
        <button className="modal__link" type="button" onClick={onSwitch}>
          Entrar
        </button>
      </p>
    </Modal>
  );
}

export default SignupModal;
