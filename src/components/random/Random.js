import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}

function Random(props){

    return(
    <div className="alert alert-danger" role="alert">
        Random value between {props.min} and {props.max} => {randomNumber(props.min,props.max)}
    </div>
    )
}
export default Random
