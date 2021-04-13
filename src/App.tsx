import React, { useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import { sliderDetailType, settingsType, USSType } from './Types'
import { CSSTransition } from 'react-transition-group'

const App = () => 
{
    const [settings, updateSettings] = useState({"slice": false, "append": false} as settingsType);
    const [sliders, updateSliders] = useState([{ "path": "VIVA", "depth": 0, "slidIn": true }]);

    const updateSlidersAndSettings: USSType = (f, arr, sets) => {
        const newSliders = sliders.map(s => {
            if (f(s)) return s;
            else return { "path": s.path, "depth": s.depth, "slidIn": false }
        }).concat(arr);
        updateSliders(newSliders);
        updateSettings(sets);
    }

    //function to add new slider with click
    const slideOut = (path: string, depth: number) => {
        const newSlider = { path, depth, "slidIn": true };
        
        // new bottom slider requested
        if (depth >= sliders.length) {
            updateSlidersAndSettings(
                (s: sliderDetailType) => true,
                [newSlider],
                {"slice": false, "append": false}
            );
        }

        // request made for already present slider
        else if (path === sliders[depth].path) {
            updateSlidersAndSettings(
                (s: sliderDetailType) => s.depth <= depth,
                [],
                {"slice": depth + 1, "append": false}
            );
        }

        // request made for new slider, not at bottom
        else {
            updateSlidersAndSettings(
                (s: sliderDetailType) => s.depth < depth,
                [],
                { "slice": depth, "append": newSlider}
            );
        }
    }

    // slice, append then update sliders after transition
    const removeThenAdd = () => {
        const sliced = sliders.slice(0, settings.slice ? settings.slice : sliders.length);
        const appended = sliced.concat(settings.append ? [settings.append] : []);
        updateSliders(appended);
    }

    const createSlider = (sliderDetail: sliderDetailType) => {
        return (
            <CSSTransition 
                in = { sliderDetail.slidIn }
                timeout = { 1000 }
                classNames = "display"
                unmountOnExit 
                onExited = {removeThenAdd}
                appear
                key = { sliderDetail.path }
            >
                <Slider  
                    depth = { sliderDetail.depth }
                    path = { sliderDetail.path } 
                    onClick = { slideOut }
                />
            </CSSTransition>
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