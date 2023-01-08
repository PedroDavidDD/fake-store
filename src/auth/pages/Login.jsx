import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm/useForm';
import { AuthContext } from '../context/AuthContext';

export const Login = () => {  
  
  const { login } = useContext( AuthContext );
  const navigate = useNavigate();
  const { onInputChange, user, password } = useForm({
    user: '',
    password: '',
  });

  const onLogin =()=>{
    // [2] Para recodar la ultima ruta guardada: lastPath 
    if ( user.trim().length < 1 || password.trim().length < 1 ) return;
    
    if ( user !== 'david' || password !== 'diaz' ) return;

    const lastPath = localStorage.getItem('lastPath') || '/';

    login(user, password);      

    navigate( lastPath, {
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <div className='form-group'>
        <label htmlFor="" className='col-form-label'>
          Usuario:
          <input type="text" placeholder='User' name='user' className='form-control' onChange={onInputChange} />
        </label>
      </div>
      <div className='form-group'>
        <label htmlFor="" className='col-form-label'>
          Password:
          <input type="text" placeholder='Password' name='password' className='form-control' onChange={onInputChange} />
        </label>
      </div>
      <button
      className="btn btn-primary"
      onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}
