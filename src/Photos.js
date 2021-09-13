import React from "react";

export default function Photos(props){
    if (props.photos){
        console.log(props.photos);
    return(
        <div>
            {props.photos.map(function (photo, index){
                return(
                    <div key={index}>
                        <a href={photo.src.original}
                           target="_blank"
                           rel="noreferrer"
                        >
                        <img src={photo.src.landscape} 
                             className="img-fluid"
                             alt=""
                        />
                        </a>
                    </div>
                );
            })}
        </div>
    );
    }else{
        return null;
    }
}