import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { StyledNavbar, StyledNavbarCollapse, StyledNavbarMenu } from '../../style/components/StyledNavbar';
// import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    const { user, logout } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogout = () => {

        navigate('login', {
          replace: true,
        });

        logout();
    }
    
    return (
        <StyledNavbar>
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                [ Ropas ]
            </Link>

            <StyledNavbarMenu className="navbar-menu">
                |||
            </StyledNavbarMenu>

            <StyledNavbarCollapse>
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/clothes"
                    >
                        clothes: Todas las ropas
                    </NavLink>
                    <NavLink 
                        className={ ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}  
                        to="/category"
                    >
                        category
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
            </StyledNavbarCollapse>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-primary">
                        { user?.name } 
                    </span>

                    <button
                        className={"nav-item nav-link btn"}  
                        onClick={ onLogout }
                    >
                        Logout
                    </button>

                </ul>
            </div>
        </StyledNavbar>
    )
}