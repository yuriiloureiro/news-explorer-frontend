import { useEffect } from "react";
import "./Modal.css";

function Modal({ onClose, children }) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div className="modal" onClick={onClose}>
      <div
        className="modal__container"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Fechar"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
