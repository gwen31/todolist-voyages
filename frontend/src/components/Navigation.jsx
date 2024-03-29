import React from 'react'
import { Nav, Navbar} from 'rsuite';
import { NavLink } from "react-router-dom";

const Navigation = () => {
    
    return ( 
     
        <div className="navigation">
            <Navbar className="navbar">
                    <Nav>
                        <Nav.Item className="nav_link">
                        <NavLink to="/home"><img className="logo" src="/assets/home.png" alt="logo home" height="30" width="30"/>
                            <span>Accueil</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav_link">
                        <NavLink to="/addLocation"><img className="logo" src="/assets/addForm.png" alt="logo home" height="30" width="30"/>
                            <span>Ajouter un lieu</span>
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item className="nav_link">
                        <NavLink to="/"><img className="logo3" src="/assets/profil.png" alt="logo home" height="30" width="30"/>
                            <span>Déconnexion</span>
                            </NavLink>
                        </Nav.Item>
                    </Nav>
            </Navbar>
    </div>
    )
  };

export default Navigation
