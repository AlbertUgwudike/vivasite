import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';

type sliderPropsType = {
    "fileName" : string;
}

const App = () => 
{
    const [sliders, updateSliders] = useState([{"fileName" : "VIVA.json"}])

    //function to add new slider with click
    const handleClick = (fileName: string) => {
        const newSliders = sliders.slice().concat([
            {"fileName": fileName}
        ]);

        updateSliders(newSliders);
    }

    const createSlider = (sliderProps: sliderPropsType) => {
        return (
            <Slider 
                key = { sliderProps.fileName } 
                fileName = { sliderProps.fileName } 
                onClick = { handleClick }
            />
        );
    }

    return (
        <div>
            <Header />
            { sliders.map(createSlider) }
        </div>
    )
}

export default App;
