import React from 'react';
import './placement.scss';
import useWindowDimensions from "./WindowDemension";

const Placement = () => {
    const { height, width } = useWindowDimensions();
    let angle = 253 + width/16 ;
    //let windowSill = 40*1400/width;
    //style={{transform:`rotate(${angle}deg)`,width:`${windowSill}%`}}
    return(<>
        <div className={'container'} >
            <div className={'topBox'} >
                {/*<div className={'topButtons'} ></div>*/}
            </div>
            <div className={'centerBox'} >
                <div className={'left'} >
                    {/*<div className={'window'} ></div>*/}
                    {/*<div className={'window-sill'} style={{transform:`rotate(${angle}deg)`}}></div>*/}
                </div>
                <div className={'center'} ><p>{width}:{height}</p></div>
                <div className={'right'} ></div>
            </div>
            <div className={'bottomBox'} ></div>
        </div>
    </>)
}

export default Placement;