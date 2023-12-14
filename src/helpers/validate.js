import { useState } from "react";

const REQUIRED_FIELD_ERROR = "Este campo es requerido.";

export function useTextInputValidation() {
  const [errorText, setErrorText] = useState("");

  const validateText = (value) => {
    if (!value) {
      setErrorText(REQUIRED_FIELD_ERROR);
    } else {
      setErrorText("");
    }
  };

  return { errorText, setErrorText, validateText };
}

export function useEmailInputValidation() {
  const [errorEmail, setErrorEmail] = useState("");

  const validateEmail = (value) => {
    const emailRegex = /^\w+([.+-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;

    if (!value) {
      setErrorEmail(REQUIRED_FIELD_ERROR);
    } else if (!emailRegex.test(value)) {
      setErrorEmail("El correo electrónico no es válido.");
    } else {
      setErrorEmail("");
    }
  };

  return { errorEmail, setErrorEmail, validateEmail };
}

export function usePasswordInputValidation() {
  const [errorPassword, setErrorPassword] = useState("");

  const validatePassword = (value) => {
    if (!value) {
      setErrorPassword(REQUIRED_FIELD_ERROR);
    } else if (value.length < 8) {
      setErrorPassword(
        "La contraseña no es válida. (la contraseña debe tener al menos 8 caracteres)"
      );
    } else {
      setErrorPassword("");
    }
  };

  return { errorPassword, setErrorPassword, validatePassword };
}

export function useCheckboxInputValidation() {
  const [errorCheckbox, setErrorCheckbox] = useState(false);

  const validateCheckbox = (value) => {
    if (!value) {
      setErrorCheckbox(true);
    }
  };

  return { errorCheckbox, setErrorCheckbox, validateCheckbox };
}
