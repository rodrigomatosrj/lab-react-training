import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Star(props){

    return(
        <img src={`/img/bootstrap-icons/icons/${props.children?"star-fill":"star"}.svg`} alt="" width="32" height="32" title="Bootstrap" />
    )

}

export default Star;