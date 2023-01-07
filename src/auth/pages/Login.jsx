import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {  
  
  const navigate = useNavigate();

  const onLogin =()=>{
    // [2] Para recodar la ultima ruta guardada: lastPath 
    const lastPath = '/' || '/';


    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
      className="btn btn-primary"
      onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
