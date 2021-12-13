import React, { useEffect, useState } from 'react';
import './details.css'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { useParams } from 'react-router';
import db from '../firebase';
import firebase from 'firebase'


function Details() {
    const {id} =useParams();

    const [movie,setmovie] =useState({});
    console.log(movie);

    useEffect(()=>{
        db.collection('movie').doc(id).get().then((doc) =>{
            setmovie(doc.data());
        })
    }, [id]);


    if(sessionStorage.getItem('fm')){
        return (
            <div className="details">
                <div className="background__img">
                    <img src={movie.bgimg} />
                </div>
                <div className="img__title">
                    <img src={movie.titleimg} />
                </div>
                <div className="details__contant">
                    <div className="controls">
                        <button>
                            <img src="/images/play-icon-black.png"/>
                            <span>PLay</span>
                        </button>
    
                        <button>
                            <img src="/images/play-icon-white.png"/>
                            <span>Trailer</span>
                        </button>
                        <div className="addlist">
                            <span></span>
                            <span></span>
                        </div>
                        <div className="addlist">
                           <img src="/images/group-icon.png" />
                        </div>
                    </div>
                    <div className="discription">
                        <p>{movie.titletext}</p>
                        <p>{movie.des}</p>
                    </div>
                </div>
            </div>
        )

    }else{
        return <Redirect to="/"/>
    }
   
}

export default Details
