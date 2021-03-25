import React from 'react'

const Slider = () => 
{
    return (
        <div className = "container-fluid debuge">
            <div  className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-auto sliderHead debuge"> VIVA </div>
                <div className = "col sliderTail debuge"> 
                    <div className = "row debuge"> 
                        <button className = "sliderOption"> Obstetrics </button> 
                    </div>
                    <div className = "row debuge"> 
                        <button className = "sliderOption"> Gynaecology </button> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;