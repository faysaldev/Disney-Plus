import React from 'react';
import {Link} from "react-router-dom";

function Recommend() {
    return (
        <div className="disney">
            <h4>New Disney+ For You</h4>
            <div className="content">
                <div className="single__recommend">
                   <Link to="/details/disney1">
                       <img src="/images/newdisney1.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/disney2">
                       <img src="/images/newdisney2.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/disney3">
                       <img src="/images/newdisney3.png"/>
                   </Link>
                </div>

                <div className="single__recommend">
                   <Link to="/details/disney4">
                       <img src="/images/newdisney4.png"/>
                   </Link>
                </div>

            </div>
        </div>
    )
}

export default Recommend;
