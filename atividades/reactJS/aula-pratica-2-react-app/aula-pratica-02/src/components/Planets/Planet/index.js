import React from "react";
import GrayImg from "../../shared/gray_img";


const planet = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <GrayImg img_url={props.img_url}/>
        </div>
    );
};

export default planet;