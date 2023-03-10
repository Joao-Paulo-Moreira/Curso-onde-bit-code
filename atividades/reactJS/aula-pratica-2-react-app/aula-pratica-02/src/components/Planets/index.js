import React, {Fragment} from "react";
import Planet from './Planet'

const planets = () => {
    return(
        <Fragment>
            <h3>Planet list</h3>
            <hr/>
            <Planet/>
        </Fragment>
    );
};

export default planets;
