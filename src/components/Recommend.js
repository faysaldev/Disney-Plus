import React from 'react';
import {Link} from "react-router-dom";

function Recommend() {
    return (
        <div className="recommend">
            <h4>Recommended For You</h4>
            <div className="content">
                <div className="single__recommend">
                   <Link to="/details/recommended1">
                       <img src="/images/recommend1.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/recommended2">
                       <img src="/images/recommend2.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/recommended3">
                       <img src="/images/recommend3.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/recommended4">
                       <img src="/images/recommend4.png"/>
                   </Link>
                </div>

            </div>
        </div>
    )
}

export default Recommend;
