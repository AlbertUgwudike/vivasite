import React, { useEffect, useState } from 'react'
import {sliderDataType, sliderPropsType, buttonPropsType} from './Types'
import fetchSliderData from './funcs'

const Slider = (props: sliderPropsType) => 
{
    const [sliderData, updateSliderData]  = useState({"title": "", "children": [{"title": "", "source": ""}]});
    
    useEffect(() => {
        fetchSliderData(props.fileName)
        .then(updateSliderData);
    }, []);
   
    const makeButton = (buttonProps: buttonPropsType) => {
        return (
            <div className = "row debuge"> 
                <button className = "sliderOption"> {buttonProps.title} </button> 
            </div>
        )
    } 

    return (
        <div className = "container-fluid debuge">
            <div  className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-auto sliderHead debuge"> {sliderData.title} </div>
                <div className = "col sliderTail debuge"> 
                    { sliderData.children.map((v) => makeButton(v)) }
                </div>
            </div>
        </div>
    );
}

export default Slider;