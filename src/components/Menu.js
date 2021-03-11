import React, { useEffect } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-navbar navbar-border ">
            <a className="navbar-brand col-12 col-lg text-lg-left pl-3 p-0 grow" href="/">
                <h1 className='text-center mb-0 grow' >Yohann</h1>
                <span className='text-center pb-2 col grow'>Développeur Web</span>    
            </a>           
            
            <div className="navbar-nav d-flex flex-row w-100 mw-100 justify-content-around align-items-center items-margin bg-navbar">
                <BrowserRouter>                      
                    <NavLink className="nav-link mx-3 mh-100 col" to='/about'>A propos de moi</NavLink>
                    <NavLink className="nav-link mx-3 mh-100 col" to='/skills'>Mes skills</NavLink>
                    <NavLink className="nav-link mx-3 mh-100 col" to='/contact'>Contactez-moi</NavLink>
                </BrowserRouter>
                
            </div>
            
        </nav>
    )
}

export default Menu;