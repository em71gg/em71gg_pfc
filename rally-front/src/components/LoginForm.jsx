import { useContext, useState } from "react";
import "./LoginForm.css";
import { UserContext } from "../context/user.context";

function LoginForm(props) {
  const {login} = useContext(UserContext); 
  const [user, setUser] = useState({
    name: '',
    password: ''
  });
  const handleSubmit= (event) => {
    event.preventDefault();
    console.log(user);
    //llamar funcion login y si exitoso redirigir a página de usuario
  }

  const handleChange = (event) =>{
    const {id, value} = event.target;
    setUser((prevUser)=>({
      ...prevUser,
      [id]: value,
    }));
  }

  
  
  return (
        <div className="login-box">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label htmlFor='name'>Username</label>
               <input type="text" name="" required="" id='name' onChange={handleChange}/>
            </fieldset>
            <fieldset>
              <label htmlFor="password">Password</label>
              <input type="password" name="" required="" id='password' onChange={handleChange}/>
            </fieldset>
            <button >Login</button>
          </form>
        </div>
  )
}

export default LoginForm