import { useState } from "react"


function RegisterParticipantOnRallyForm() {
  const[rallyUser, setRallyUser] = useState({
      'rally_id': '',
      'user_id': '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(rallyUser);
  }

  const handleChange = (event) =>{
    const {id, value} = event.target;
    setRallyUser((prevUser)=>({
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

export default RegisterParticipantOnRallyForm