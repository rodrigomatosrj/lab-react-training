import React from "react";
import Rating from "../rating/Rating";
import 'bootstrap/dist/css/bootstrap.min.css';

function DriverCard(props){

    return (
        <div className="card">
            <div className="card-body">
            <img src={props.img} alt="Driver Photo" width="150" className="rounded-circle" /></div>
            <p>{props.name}</p>
            <Rating>{props.rating}</Rating>
            <p>{props.car.model} {props.car.licensePlate}</p>
        </div>
    )

}

export default DriverCard;