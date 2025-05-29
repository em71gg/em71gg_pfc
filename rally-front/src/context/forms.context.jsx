import { createContext } from "react";


const FormsContext = createContext();

function FormsProviderWrapper(props) {

    const handleChange = (event) =>{
    const {id, value} = event.target;
    setUser((prevUser)=>({
      ...prevUser,
      [id]: value,
    }));

    return (
        <FormsContext.Provider value={{handleChange}}>
            {props.childern}
        </FormsContext.Provider>
    )
  }

}
export {FormsContext, FormsProviderWrapper}