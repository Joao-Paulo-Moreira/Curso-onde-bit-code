import React from "react";
import './style.css';

const GrayImg = (props) => {
    return (
            <img className="greyImage" src={props.img_url} alt="imagem"/> 
    )
};

export default GrayImg;