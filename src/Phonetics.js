import React from "react";
import "./Phonetics.css";

export default function Phonetics(props){
    
    return(
        <div className="phonetics">
            <a href={props.phonetic.audio} 
               className="listen-link"
               target="_blank"
               rel="noreferrer">
                <i className="fas fa-volume-up"></i>
            </a>
            <span className="phonetic-text">
            /{props.phonetic.text}/
            </span>
        </div>
    );
}