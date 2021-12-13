import React from 'react';
import './Home.css'
import Recommend from './Recommend';
import Sliders from './Slider';
import Viewers from './Viewers';
import Newdisney from './Newdisney';
import Foryou from './Foryou';
import { Redirect } from 'react-router';

function Home() {
  if(sessionStorage.getItem('fm')){
         return (
            <main style={{backgroundImage:`url("images/home-background.png")`}}>
            <div className="slider">
              <Sliders />
             <Viewers />
             <Recommend />
             <Newdisney />
             <Foryou />
            </div>
        </main>
        )
       }else{
          return <Redirect to="/"/>
       }
   
}

export default Home
