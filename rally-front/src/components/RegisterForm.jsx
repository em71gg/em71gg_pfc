import { useContext, useEffect, useState } from "react";
import "./RegisterForm.css";
import { UserContext } from "../context/user.context";

function RegisterForm(props) {
  const {register} = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    surname: "",
    nickname: "",
    role: "",
  });

  const { password, cpassword } = user;
  const [psswMatch, setPsswMatch] = useState(true);
  useEffect(() => {
    setPsswMatch(password === cpassword);
  }, [password, cpassword]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !psswMatch ||
      !user.name ||
      !user.email ||
      !user.password ||
      !user.cpassword
    ) {
      alert("Rellene los campos obligatorios");
      return;
    }

    
    props.handleUserInfo(user);

    const userData = {
      name: user.name,
      email: user.email,
      password: user.password,
      password_confirmation: user.cpassword,
      surname: user.surname,
      nickname: user.nickname,
      role: user.role,
    };

    register(userData)
    .then((result) =>{
      if(result.success){
        console.log('usuario registrado', result.data);
        //redirigir Login o recibir correo confirmación
      }else{
        console.error('Errores:', result.errors);
      }
    });

  };

  return (
    <div className="register-box">
      <h2>Registro</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <fieldset className="">
          <label htmlFor="name" className="register-name">
            Nombre
          </label>
          <input
            type="text"
            className="name"
            id="name"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="surname" className="register-surname">
            surname
          </label>
          <input
            type="text"
            className="surname"
            id="surname"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="nickname" className="nickname">
            Nick name
          </label>
          <input
            type="text"
            className="nickname"
            id="nickname"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="role" className="role">
            Role
          </label>
          <input
            type="text"
            className="role"
            id="role"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="email"
            id="email"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            className="password"
            id="password"
            onChange={handleChange}
          />
        </fieldset>
        <fieldset className="">
          <label htmlFor="cpassword">Confirmar Contraseña</label>
          <input
            type="password"
            className={`cpassword ${!psswMatch ? "pssErrorBorder" : ""}`}
            id="cpassword"
            onChange={handleChange}
          />
          <div className="input-error">
            {psswMatch ? "" : "Error: Passwords do not match"}
          </div>
        </fieldset>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}



export default RegisterForm;
