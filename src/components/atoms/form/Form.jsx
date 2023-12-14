import { useState } from "react";
import { Link } from "react-router-dom";

import { EyeClosedOutline, EyeOutline } from "../icons";

import "./form.css";

export function Form(props) {
  return (
    <form id="root-form" {...props} noValidate>
      <div className="error-form">
        <span>Correo electrónico o contraseña incorrectos.</span>
      </div>

      {props.children}
    </form>
  );
}

export function FormInputsRow(props) {
  return (
    <div id="root-form-inputs-row" {...props}>
      {props.children}
    </div>
  );
}

export function FormInput(props) {
  const [showPass, setShowPass] = useState(false);

  const handleOnChangeAndOnBlur = (e) => {
    if (props.validate && typeof props.validate === "function") {
      props.validate(e.target.value);
    }
  };

  return (
    <div id="root-form-input">
      <label htmlFor={props.name || "text"}>{props.label || "Label"}</label>
      <div className="input--wrapper">
        <input
          type={props.type && !showPass ? props.type : "text"}
          id={props.name || "text"}
          name={props.name || "text"}
          onChange={handleOnChangeAndOnBlur}
          onBlur={handleOnChangeAndOnBlur}
          style={{ borderColor: props.error ? "var(--color-danger)" : "" }}
          required
        />

        {props.type === "password" && (
          <button type="button" onClick={() => setShowPass(!showPass)}>
            {showPass ? <EyeOutline /> : <EyeClosedOutline />}
          </button>
        )}
      </div>
      <span className="error-field">{props.error}</span>
    </div>
  );
}

export function FormInputCheck(props) {
  const handleOnChangeAndOnBlur = (e) => {
    if (props.validate && typeof props.validate === "function") {
      props.validate(e.target.checked);
    }
  };

  return (
    <label id="root-form-input-checkbox">
      <input
        type="checkbox"
        name={props.name}
        onChange={handleOnChangeAndOnBlur}
        onBlur={handleOnChangeAndOnBlur}
        required
      />
      <svg viewBox="0 0 64 64" height="2em" width="2em">
        <path
          d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
          pathLength="575.0541381835938"
          style={{ stroke: props.error ? "var(--color-danger)" : "" }}
        ></path>
      </svg>

      <p className="label">{props.children || "Título del selector"}</p>
    </label>
  );
}

export function FormButton(props) {
  return (
    <button type="submit" id="root-form-button" {...props}>
      <span>{props.text || "Enviar"}</span>
    </button>
  );
}
