import {TelegramShareButton,ViberShareButton,TelegramIcon,ViberIcon} from 'react-share'
import React, {useState} from "react";
import rzaviy_kamen from '../static/image/rzaviy_kamen.png';
const Share = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div>
            {!isShown && <button type='button'
                                 onClick={() => {setIsShown(!isShown)}}
                                 style={{background:'grey',borderRadius:'5px',padding:'6px 20px'}}
            >Share</button>}

            {isShown && <TelegramShareButton title="Kitchen design"
                                             url={"https://telegram.me/andriidobronos"}
                                             style={{marginRight:'10px'}}
                                             //children={rzaviy_kamen}
            >
                    <TelegramIcon size={32} round={true}/>
                </TelegramShareButton>}

            {isShown && <ViberShareButton title="Kitchen design:" url={"https://telegram.me/andriidobronos"}>
                    <ViberIcon size={32} round={true}/>
                </ViberShareButton>}

        </div>
    )
}
export default Share;