import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth'

export const PrivateRoute = ({ children }) => {

    const { logged } = useContext( AuthContext );
    
    // [1] Para recodar la ultima ruta guardada: lastPath 
    const  { pathname, search } = useLocation();
    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath);
    // console.log('re-rendering');

  return ( logged )
    ? <Outlet />
    : <Navigate to="/login" />
}
