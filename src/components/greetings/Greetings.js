import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

function message(lang){
    switch(lang){
        case "de":
            return "Hallo ";
        case "en": 
            return "Hello ";
        case "es": 
            return "Olá "
        case "fr":
            return "Bonjour "
        default:
            throw new Error("Idioma não suportado");
    }
}

function Greetings(props){
    return (
    <div className="alert alert-primary" role="alert">
        {message(props.lang)}{props.children}
    </div>)
}

export default Greetings;