import { TelegramShareButton, ViberShareButton, TelegramIcon, ViberIcon } from 'react-share';
import React, { useState } from "react";

const Share = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {!isShown && (
                <button
                    type='button'
                    className="buttonDownload"
                    aria-label="Share"
                    onClick={() => setIsShown(true)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                </button>
            )}
            {isShown && (
                <TelegramShareButton
                    title="Kitchen design"
                    url={"https://kitchen-decor-design.netlify.app"}
                >
                    <TelegramIcon size={32} round={true} />
                </TelegramShareButton>
            )}
            {isShown && (
                <ViberShareButton
                    title="Kitchen design:"
                    url={"https://kitchen-decor-design.netlify.app"}
                >
                    <ViberIcon size={32} round={true} />
                </ViberShareButton>
            )}
        </div>
    );
};

export default Share;
