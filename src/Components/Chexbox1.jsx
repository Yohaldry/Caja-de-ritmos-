import React, {Fragment} from 'react'

const Chexbox1 = () => {
    return (

        <Fragment>

        <div className="BotonOnOFF">
            <label className="power"><strong>Power</strong></label>
            <input type="checkbox"  id="switch"/>
            <label for="switch" class="lbl"></label>
            
        </div>

        <h2 id="sonido"><strong>Sonido</strong></h2>
        <input className="RangoVolumen" type="range" min="0" max="100"/>
       
        <div className="BotonCambiar">

            <input type="checkbox"  id="switchDos"/>
            <label for="switchDos" class="elDos"></label>
            
        </div>
       
        </Fragment>
    )
}

export default Chexbox1
