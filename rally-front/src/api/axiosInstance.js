import axios from "axios";


//Para autenticacion
export const getCsrf = async () => {
  return axios.get("/sanctum/csrf-cookie", {
     withCredentials: true,
  }); // sin baseURL
   
};

// Cliente para rutas Fortify 
export const authFortify = axios.create({
  baseURL: "/", // sin /api
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    Accept: "application/json",
  },
});

// Cliente rutas api
export const api = axios.create({
  baseURL: "/api",
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
  },
});


