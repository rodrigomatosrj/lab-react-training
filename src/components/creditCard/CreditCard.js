import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import './CreditCard.css'

function cardNumber(cardNumber){

 return [...cardNumber].map((el,idx)=>idx<12?".":   el).reduce((acc,el,idx)=>
 {
  return idx%4 === 0 ? acc+" "+el : acc + el;
 },"");
   
}


function CreditCard(props){

    return(
    <div className="card" style={{backgroundColor:`${props.bgColor}`,color:`${props.color}`}}>
        <div className="card-body">
            <p className="text-right">{props.type}</p>
           <p className="text-center">{cardNumber(props.number)}</p>

            <p>Expires {props.expirationMonth.toString().padStart(2,"0")}/{props.expirationYear} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}</p>
            <p>{props.owner}</p>
        </div>
    </div>);
}

export default CreditCard; 