import React from 'react';
import {Link} from "react-router-dom";

function Recommend() {
    return (
        <div className="foryou">
            <h4>Orginials For You</h4>
            <div className="content">
                <div className="single__recommend">
                   <Link to="/details/original1">
                       <img src="/images/originial1.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original2">
                       <img src="/images/originial2.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original3">
                       <img src="/images/originial3.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original4">
                       <img src="/images/originial4.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original5">
                       <img src="/images/originial5.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original6">
                       <img src="/images/originial6.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original7">
                       <img src="/images/originial7.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/original8">
                       <img src="/images/originial8.png"/>
                   </Link>
                </div>

            </div>
        </div>
    )
}

export default Recommend;
