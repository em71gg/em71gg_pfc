import { authFortify, api, getCsrf } from "../api/axiosInstance";
import { createContext } from "react";
import { useState } from "react";



const UserContext = createContext();

function UserProviderWrapper(props) {
  //variable del profile del usuario
  const [user, setUser] = useState({
    id:1,
    name: 'Pedro',
    email:'',
    surname:'',
    nicknmae:'',
    role:'',
    isLoggedIn: true,
  });

  //Lógica del registro
  const register = async (userData) => {
    try {
      await getCsrf();

      // 1. Registro
      const response = await authFortify.post("register", userData);

      // 2. Obtener el usuario autenticado
      const { data } = await api.get("/user");
      console.log(data);

      // 3. Guardar usuario en contexto esto debería hacerse en en el login
      setUser({
        id: data.id,
        name: data.name,
        email: data.email,
        surname: data.surname,
        nickname: data.nickname,
        role: data.roles[0].name,
        isLoggedIn: true,
      });

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      if (error.response) {
        return {
          success: false,
          errors: error.response.data.errors,
        };
      } else {
        return {
          success: false,
          errors: [error.message],
        };
      }
    }
  };




  const login = async (userData) => {
    try {
      // 1. Obtener el CSRF cookie
      await authFortify.get('/sanctum/csrf-cookie');

      // 2. Enviar solicitud de login
      await authFortify.post('/login', userData, {
        headers: { Accept: "application/json" },
      });

      // 3. Obtener el usuario autenticado
      const {data} = await axios.get('/user');
      setUser({
        id: data.id,
        name:data.name,
        email: data.email,
        surname: data.surname,
        nickname: data.nickname,
        role:data.role,
      });

      return {
        success: true,
        user,
      };
    } catch (error) {
      if (error.response && error.response.data.errors) {
        return {
          success: false,
          errors: error.response.data.errors,
        };
      } else {
        return {
          success: false,
          errors: [error.message],
        };
      }
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, register, login }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProviderWrapper };

