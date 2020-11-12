import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
 
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function BoxColor(props){

    return(
    <div style={{backgroundColor:`rgb(${props.r},${props.g},${props.b})`}}className="jumbotron jumbotron-fluid">
       <p className="text-center"> rgb({props.r},{props.g},{props.b}) </p>
       <p className="text-center"> {rgbToHex(props.r,props.g,props.b)} </p>

    </div>
        )
}

export default BoxColor;

