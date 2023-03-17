import React, {Fragment} from "react";
import Planet from './Planet'

const planets = () => {
    return(
        <Fragment>
            <h3>Planet list</h3>
            <hr/>
            <Planet title='Terra' description="Descrição sobre o planeta terra" img_url="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2015/07/21/imagemterraespaconasa.png"/>
        </Fragment>
    );
};

export default planets;
