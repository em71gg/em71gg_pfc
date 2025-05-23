import axios from "axios";
import { createContext } from "react";
import { useState } from "react";

axios.defaults.baseURL = "http://localhost/api"; // API
axios.defaults.withCredentials = true; // esto permite enviar cookies
axios.defaults.withXSRFToken = true;
axios.defaults.headers.common["Accept"] = "application/json";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setUser] = useState({
    //el objeto lo obtendré de la lógica del login
    name: "Pedro",
    email: "",
    password: "",
    cpassword: "",
    surname: "",
    nickname: "",
    role: "",
    isLoggedIn: true, //variable que da acceso
  });

  //Lógica del registro
  const register = (userData) => {
    axios
      .get("sanctum/csrf-cookie")
      .then(() => {
        console.log("Log previo al post: ", user);
        return axios.post("/register", userData, {
          headers: { Accept: "application/json" },
        });
      })
      .then((response) => {
        console.log("Usuario Registrado: ", response.data);
        return { success: true, data: response.data };
      })
      .catch((error) => {
        if (error.response) {
          return {
            success: false,
            errors: error.response.data.errors,
          };
        } else {
          return {
            success: false,
            errors: error.message,
          };
        }
      });
  };
  return (
    <UserContext.Provider value={{ user, setUser, register }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };
