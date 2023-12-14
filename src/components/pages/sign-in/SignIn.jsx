import { Link } from "react-router-dom";

import logotipo from "/novacors.svg";
import Footer from "../../melacules/footer/Footer";
import { Form, FormButton, FormInput } from "../../atoms/form/Form";

import "./sign-in.css";

function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
  };

  return (
    <div id="root-sign-in">
      <div className="sign-in__container">
        <Link to="/" className="logo">
          <img src={logotipo} alt="Novacors" />
        </Link>

        <h1 className="title">Inicia sesión</h1>

        <Form className="form" onSubmit={handleSubmit}>
          <FormInput label="Correo electrónico" type="email" name="email" />
          <FormInput label="Contraseña" type="password" name="password" />
          <FormButton text="Iniciar sesión" />
        </Form>

        <Link to="/sign-up" className="link">
          <span>¿No tienes una cuenta?</span>
        </Link>
      </div>

      <Footer contentStyle={{ display: "none" }} />
    </div>
  );
}

export default SignIn;
