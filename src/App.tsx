import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';

type sliderPropsType = {
    "fileName" : string;
}

const App = () => 
{
    const [sliders, updateSliders] = useState([{"fileName" : "VIVA.json"}])

    const createSlider = (sliderProps: sliderPropsType) => {
        return (
            <Slider fileName = { sliderProps.fileName } />
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
