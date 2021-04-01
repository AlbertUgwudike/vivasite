import React, { useEffect, useState } from 'react'
import {sliderPropsType, buttonPropsType} from './Types'
import fetchSliderData from './funcs'

const Slider = (props: sliderPropsType) => 
{
    const [sliderData, updateSliderData] = useState({"title": "", "children": [{"title": "", "source": ""}]});
    
    useEffect(() => {
        fetchSliderData(props.fileName)
        .then(updateSliderData);
    }, []);

    const makeButton = (title:string, source:string) => {
        return (
            <button className = "sliderOption" onClick = {() => props.onClick(source)} >
                {title} 
            </button>
        );
    }
   
    const makeButtons = (buttons: buttonPropsType[] ) => {
        const len = buttons.length;
        const rowCount = len % 2 ? (len + 1) / 2 : len / 2;
        const titleAtIdx = (idx: number) => idx < len ? buttons[idx].title : "";
        const sourceAtIdx = (idx: number) => idx < len ? buttons[idx].source : "";

        return Array(rowCount).fill(0).reduce((acc, a, i) => {
            return acc.concat([
                <div>
                    { makeButton(titleAtIdx(2 * i), sourceAtIdx(2 * i)) }
                    { makeButton(titleAtIdx(2 * i + 1), sourceAtIdx(2 * i + 1)) }
                </div>
            ])
        }, [])
    } 

    return (
        <div className = "container-fluid debuge">
            <div  className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-auto sliderHead debuge"> {sliderData.title} </div>
                <div className = "col sliderTail debuge"> 
                    { makeButtons(sliderData.children) }
                </div>
            </div>
        </div>
    );
}

export default Slider;