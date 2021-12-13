import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { auth, provider } from '../firebase';
import './header.css';

function Header() {

const loginHandler = () => {
auth.signInWithPopup(provider)
.then((result)=> {
    console.log(result);
    console.log(result.user.photoURL);
    sessionStorage.setItem("fm","Faysal");
    window.location.reload();
})
.catch((error)=>alert(error.message));

};

const logout=()=>{
    sessionStorage.clear();
    window.location.reload();
}

const setsession = sessionStorage.key("fm");

    return (
        <div className="header">
            <nav>
                <Link to="/" className="disnep__logo">
                    <img src="/images/logo.svg" />
                </Link>
                    {setsession?(

                       <>
                            <div className="main__manu">
                            <Link to="/">
                             <img src="/images/home-icon.svg" />
                             <span>HOME</span>
                         </Link>  
         
                         <a href="/">
                             <img src="/images/search-icon.svg" />
                             <span>SEARCH</span>
                         </a> 
         
                         <a href="/">
                             <img src="/images/watchlist-icon.svg" />
                             <span>WATCHLIST</span>
                         </a> 
         
                         <a href="/">
                             <img src="/images/original-icon.svg" />
                             <span>ORIGINALS</span>
                         </a> 
         
                         <a href="/">
                             <img src="/images/series-icon.svg" />
                             <span>SHRIES</span>
                         </a> 

                            
                        
                         </div>
                          <div className="profile__img">
                                <img src="/images/IMG_2580.jpg" />
                                <span onClick={logout}>LOGOUT</span>
                            </div>
                         </>
                    ) : (
                        <button onClick={loginHandler} className="login__btn">Login</button>
                    )}
                

               
            </nav>
        </div>
    )
}

export default Header;
