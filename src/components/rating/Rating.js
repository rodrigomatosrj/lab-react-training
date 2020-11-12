import React from "react";
import Star from "../star/Star";
import 'bootstrap/dist/css/bootstrap.min.css';


function calcStars(rating){
    const result = [];
    for(let i=0;i<5;i++){
      result.push(Math.round(rating) > i ? true : false);
    }
    return result;
}


function Rating(props){

let star = calcStars(props.children);

return(
    <div>
        <Star>{star[0]}</Star>
        <Star>{star[1]}</Star>
        <Star>{star[2]}</Star>
        <Star>{star[3]}</Star>
        <Star>{star[4]}</Star>
    </div>
)

}

export default Rating;