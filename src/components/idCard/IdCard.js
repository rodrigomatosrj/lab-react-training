import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './IdCard.css';

function IdCard(props   ){
    return(
    
   <div className="card mb-3">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.picture} className="card-img" alt="Profile Image"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text"><b>First Name:</b> {props.firstName}</p>
        <p className="card-text"><b>Last Name:</b> {props.lastName}</p>
        <p className="card-text"><b>Gender:</b> {props.gender}</p>
        <p className="card-text"><b>Height:</b> {props.height/100} m</p>
        <p className="card-text"><b>Birth:</b> {props.birth.toDateString()}</p>
      </div>
    </div>
  </div>
</div>
    
    )
}


export default IdCard;