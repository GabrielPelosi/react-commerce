import React from 'react'
import {Close} from '@material-ui/icons';
import './Popup.scss'

type PopupParam = {
    trigger: boolean;
    alertMessage: string;
    setTrigger: Function;
}

const Popup = ({trigger, alertMessage,setTrigger}: PopupParam) => {

    return (trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button onClick={() => setTrigger(false)} className="close-btn"><Close style={{color: "rgb(37, 37, 37)", alignSelf: "center", marginLeft: "2px"}}/></button>
                <h3>Erro!</h3>
                    <p>{alertMessage}</p>
            </div>
        </div>
    ) : <div></div>
}

export default Popup
