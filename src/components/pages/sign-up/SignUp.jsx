import { Link } from "react-router-dom";

import logotipo from "/novacors.svg";
import Footer from "../../melacules/footer/Footer";
import {
  Form,
  FormButton,
  FormInput,
  FormInputCheck,
  FormInputsRow,
} from "../../atoms/form/Form";
import {
  useTextInputValidation,
  useEmailInputValidation,
  usePasswordInputValidation,
  useCheckboxInputValidation,
} from "../../../helpers/validate";

import "./sign-up.css";

function SignUp() {
  const { errorText: errorFirstName, validateText: validateFirstName } =
    useTextInputValidation();
  const { errorText: errorLastName, validateText: validateLastName } =
    useTextInputValidation();
  const { errorEmail, validateEmail } = useEmailInputValidation();
  const { errorPassword, validatePassword } = usePasswordInputValidation();
  const {
    errorPassword: errorConfirmPass,
    setErrorPassword: setErrorConfirmPass,
    validatePassword: validateConfirmPass,
  } = usePasswordInputValidation();
  const { errorCheckbox: errorAccept, validateCheckbox: validateAccept } =
    useCheckboxInputValidation();

  const handleSubmit = (e) => {
    e.preventDefault();

    validateFirstName(e.target.firstName.value);
    validateLastName(e.target.lastName.value);
    validateEmail(e.target.email.value);
    validatePassword(e.target.password.value);
    validateConfirmPass(e.target.confirmPass.value);
    validateAccept(e.target.accept.checked);

    if (
      e.target.password.value.length >= 8 &&
      e.target.confirmPass.value.length >= 8 &&
      e.target.password.value !== e.target.confirmPass.value
    ) {
      setErrorConfirmPass(
        "Las contraseñas no coinciden. Por favor, inténtalo de nuevo."
      );

      return;
    }
  };

  return (
    <div id="root-sign-up">
      <div className="sign-up__container">
        <Link to="/" className="logo">
          <img src={logotipo} alt="Novacors" />
        </Link>

        <h1 className="title">Crea tu cuenta</h1>

        <Form className="form" onSubmit={handleSubmit}>
          <FormInputsRow>
            <FormInput
              label="Nombre"
              type="text"
              name="firstName"
              validate={validateFirstName}
              error={errorFirstName}
            />
            <FormInput
              label="Apellido"
              type="text"
              name="lastName"
              validate={validateLastName}
              error={errorLastName}
            />
          </FormInputsRow>

          <FormInput
            label="Correo electrónico"
            type="email"
            name="email"
            validate={validateEmail}
            error={errorEmail}
          />

          <FormInputsRow>
            <FormInput
              label="Contraseña"
              type="password"
              name="password"
              validate={validatePassword}
              error={errorPassword}
            />
            <FormInput
              label="Confirma tu contraseña"
              type="password"
              name="confirmPass"
              validate={validateConfirmPass}
              error={errorConfirmPass}
            />
          </FormInputsRow>

          <FormInputsRow style={{ justifyContent: "center" }}>
            <FormInputCheck
              name="accept"
              validate={validateAccept}
              error={errorAccept}
            >
              Acepto los
              <Link to="#" className="link">
                Terminos y condiciones
              </Link>
            </FormInputCheck>
          </FormInputsRow>
          <FormButton text="Registrarse" />
        </Form>

        <Link to="/sign-in" className="link">
          <span>¿Ya tienes una cuenta?</span>
        </Link>
      </div>

      <Footer contentStyle={{ display: "none" }} />
    </div>
  );
}

export default SignUp;
