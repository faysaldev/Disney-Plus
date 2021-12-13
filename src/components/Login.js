import React from 'react';
import { Redirect } from 'react-router';
import './login.css';

function Login() {
    if(sessionStorage.getItem('fm')){

        return <Redirect to="/home"/>
     
    }else{

        return (
            <section className="login" style={{backgroundImage:`linear-gradient(#00000073, #00000059), url(/images/login-background.jpg)`}}>
                <div className="login__contant">
                    <div className="cta">
                        <img className="logo1" src="images/cta-logo-one.svg" />
                        <a href="#">get all there</a>
                        <p>Get premier Access to Raya and the last Dragon for and aditional fee with a Disney+ subscription. As of 03/26/21. the price of Disney Bundle will increase by $1.</p>
                        <img className="login__img2" src="/images/cta-logo-two.png" />
                    </div>
                </div>
                
            </section>
        )
    }
}

export default Login;
