import React, { useState} from 'react';
import "./sketchPage.style.scss";
import Share from "./Share";
import { toPng } from "html-to-image";
import download from "downloadjs";
import {verticalButtons,decors,patterns,initialState} from '../constants/data';
import useWindowDimensions from "./WindowDemension";

const SketchPage = () => {

    const { height, width } = useWindowDimensions();
    let buttonDecorSizePadding = (width > 940) ? '12px' : '10px'
    const [state, setState] = useState(initialState);
    //const [selectedField,setSelectedField] = useState('');
    //const [selectedValue, setSelectedValue] = useState('');

    const handleFieldChange = (fieldName, value) => {
        setState(prevState => ({
            ...prevState,
            [fieldName]: value
        }));
        //setSelectedField(fieldName);
        //setSelectedValue(value);
    };

    const contents = [
        {id:'1',isShown:state.isShown1,setShown:()=> {handleFieldChange('isShown1',!state.isShown1)},
            view:state.view1,setView:()=> {handleFieldChange('view6',!state.view6)},
            halfHeight:state.halfHeight1,setHalfHeight:()=>{handleFieldChange('halfHeight1',!state.halfHeight1)}},
        {id:'2',isShown:state.isShown2,setShown:()=> {handleFieldChange('isShown2',!state.isShown2)},
            view:state.view2,setView:()=>{handleFieldChange('view1',!state.view1)},
            halfHeight:state.halfHeight2,setHalfHeight:()=>{handleFieldChange('halfHeight2',!state.halfHeight2)}},
        {id:'3',isShown:state.isShown3,setShown:()=> {handleFieldChange('isShown3',!state.isShown3)},
            view:state.view3,setView:()=>{handleFieldChange('view2',!state.view2)},
            halfHeight:state.halfHeight3,setHalfHeight:()=>{handleFieldChange('halfHeight3',!state.halfHeight3)}},
        {id:'4',isShown:state.isShown4,setShown:()=> {handleFieldChange('isShown4',!state.isShown4)},
            view:state.view4,setView:()=>{handleFieldChange('view3',!state.view3)},
            halfHeight:state.halfHeight4,setHalfHeight:()=>{handleFieldChange('halfHeight4',!state.halfHeight4)}},
        {id:'5',isShown:state.isShown5,setShown:()=> {handleFieldChange('isShown5',!state.isShown5)},
            view:state.view5,setView:()=>{handleFieldChange('view4',!state.view4)},
            halfHeight:state.halfHeight5,setHalfHeight:()=>{handleFieldChange('halfHeight5',!state.halfHeight5)}},
        {id:'6',isShown:state.isShown6,setShown:()=> {handleFieldChange('isShown6',!state.isShown6)},
            view:state.view6,setView:()=>{handleFieldChange('view5',!state.view5)},
            halfHeight:state.halfHeight6,setHalfHeight:()=>{handleFieldChange('halfHeight6',!state.halfHeight6)}},
    ];

    const downloadImage = () => {
        const kitchenDesign = document.querySelector('.header');
        toPng(kitchenDesign)
            .then((dataUrl) => {
                download(dataUrl, "my-kitchen-design.png");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className={"header"}
             style={state.turnOn ? {backgroundImage:`rgba(2,2,2,0.3)`} : {backgroundImage:`rgba(2,2,2,0.01)`}}
        >
            <div className={"topContainer"}>
                <div className={"topString"} >
                    <h1 className={"title"}>Kitchen design:</h1>
                    <button className={"buttonDownload"}
                            type='button'
                            onClick={downloadImage}
                    >
                        Download
                    </button>
                    <Share/>
                </div>

                <div className={"horizontalButtons"}>
                    {verticalButtons.map(item => {
                        return (<button
                            key={item.id}
                            type='button'
                            className={`button_selectElement ${item.className}`}
                            onClick={()=>handleFieldChange('selectChanges',`${item.value}`)}
                        >
                            {item.name}
                        </button>)
                    })}
                </div>

            </div>
            <div className={"container"}>
                <div className={"leftWall"} >
                    <div className={"verticalButtons"}>
                        {verticalButtons.map(item => {
                            return (<button
                                key={item.id}
                                type='button'
                                className={`button_selectElement ${item.className}`}
                                onClick={()=>handleFieldChange('selectChanges',`${item.value}`)}
                            >
                                {item.name}
                            </button>)
                        })}
                    </div>
                </div>

                <div className={"kitchenContainer"}>
                    <div className={"topBoxes"}>
                        {contents.map(content => {
                            return <>{!content.view && <div key={content.id}
                                className={"top_boxes_facade"}
                                 style={{backgroundImage:`url(${state.selectColorTopFacade})`,
                                 width: (content.id-2>=0) ? contents[content.id-2].view ? '33.34%': '16.67%':contents[5].view ? '33.34%': '16.67%'}}
                                 onClick={content.setView}
                            >
                                {((content.id-2 >= 0) ? !!contents[content.id-2].view : !!contents[5].view) &&
                                <div className={"horizontalLine"}>
                                </div>}
                            </div>}</>
                        })}
                    </div>
                    <div className={"bottomTopFacade"}
                         style={{backgroundImage:`url(${state.selectColorTopFacade} )`}}>
                    </div>
                    <div className={"container_wallPanel"}>
                        <div className={"wallPanel"}
                             style={{backgroundImage:`
                             url(${state.selectPatternWallPanel}),
                             url(${state.selectColorWallPanel})`
                        }}>
                            {state.turnOn && <div className={"backLight"}></div>}
                        </div>
                    </div>

                    <div className={"bottom"}>
                        <div className={"counterTop"}
                             style={{backgroundImage: `url(${state.selectColorCounterTop})`,
                        }}>
                            <div className={"counterTop_face"}></div>
                        </div>

                        <div className={"bottom_boxes"}>
                        {contents.map(content => {
                            return <div key={content.id}
                                className={"bottom_boxes_facade"}
                                onClick={content.setShown}
                                style={{backgroundImage: `url(${state.selectColorFacade})`
                                }}>
                                {content.isShown && <div className={"column"}>
                                    <div className={content.halfHeight ? "row-2" : "row-5"}
                                         onClick={content.setHalfHeight}
                                    >
                                    </div>
                                    {content.halfHeight && <div className={"row-4"}></div>}
                                </div>}
                            </div>})}
                        </div>

                        <div className={"counterTop plinth"}
                             style={{backgroundImage:`url(${state.selectColorFacade})`}}
                        >
                        </div>
                    </div>

                </div>
                <div className={'rightWall'} >
                    <div className={'window'} ></div>
                </div>
            </div>
            <div className={"buttons_selectDecor"}>
                {(state.selectChanges === "facade") && <div className={"buttonsPanel"} >
                    {decors.map(item => {
                        return <button key={item.id}
                                       type='button'
                                       className={"button_selectColor"}
                                       style={{backgroundImage:`url(${item.color})`,padding:`${buttonDecorSizePadding}`}}
                                       onClick={()=>{handleFieldChange('selectColorFacade',`${item.color}`)}}
                        >
                        </button>})}
                </div>}
                {(state.selectChanges === "wallPanel") && <div className={"buttonsPanel"} >
                    {decors.map(item => {
                        return <button key={item.id}
                                       type='button'
                                       className={"button_selectColor"}
                                       style={{backgroundImage:`url(${item.color})`,padding:`${buttonDecorSizePadding}`}}
                                       onClick={()=>{handleFieldChange('selectColorWallPanel',`${item.color}`)}}
                        >
                        </button>})}
                </div>}
                {(state.selectChanges === "pattern") && <div className={"buttonsPanel"} >
                    {patterns.map(item => {
                        return <button key={item.id}
                                       type='button'
                                       className={"button_selectColor"}
                                       style={{backgroundImage:`url(${item.pattern})`,padding:'25px'}}
                                       onClick={()=>{handleFieldChange('selectPatternWallPanel',`${item.pattern}`)}}
                        >
                        </button>})}
                </div>}
                {(state.selectChanges === "counterTop") && <div className={"buttonsPanel"} >
                    {decors.map(item => {
                        return <button key={item.id}
                                       type='button'
                                       className={"button_selectColor"}
                                       style={{backgroundImage:`url(${item.color})`,padding:`${buttonDecorSizePadding}`}}
                                       onClick={()=>{handleFieldChange('selectColorCounterTop',`${item.color}`)}}
                        >
                        </button>})}
                </div>}
                {(state.selectChanges === "topFacade") && <div className={"buttonsPanel"} >
                    {decors.map(item => {
                        return <button key={item.id}
                                       type='button'
                                       className={"button_selectColor"}
                                       style={{backgroundImage:`url(${item.color})`,padding:`${buttonDecorSizePadding}`}}
                                       onClick={()=>{handleFieldChange('selectColorTopFacade',`${item.color}`)}}
                        >
                        </button>})}
                </div>}
                {(state.selectChanges === "light") && <div className={"buttonsPanel"} >
                    <button type='button' className="button_selectColor"
                        onClick={()=>{handleFieldChange('turnOn',!state.turnOn)}}
                    >Turn on/off the backlight
                    </button>
                </div>}
            </div>
        </div>
    )
}
export default SketchPage;