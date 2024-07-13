import React from "react";
import myPic from "/Users/damariswanjiku/Desktop/CardReact/card/src/assets/damar.png"

function Card(){
    return(
        <>
           <div className="card">
            <img className="card-image" src={myPic} alt="profile pic" />
            <h2 className="card-title">Damaris</h2>
            <p className="card-para">I love to fly planes</p>
            <p className="card-para">I love my grandma</p>
            <p className="card-para">I love to code</p>
            <p className="card-para">I love to sleep</p>
           </div>
        </>
    )
}
export default Card