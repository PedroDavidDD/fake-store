import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    // const { state, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {
        // logout();

        navigate('login', {
          replace: true,
        });
    }
    

    return (
        <nav 
            className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                [ Ropas ]
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/clothes"
                    >
                        clothes: Todas las ropas
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/pantalones"
                    >
                        pantalones
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/clothesHead"
                    >
                        Clothes: Head
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        {/* { state.user?.name }  */}
                    </span>

                    <button
                        className={"nav-item nav-link btn"}  
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}