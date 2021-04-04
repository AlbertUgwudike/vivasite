import React, { useEffect, useState } from 'react';
import Header from './Header';
import Slider from './Slider';
import { sliderDetailType } from './Types'
import { CSSTransition } from 'react-transition-group'

const App = () => 
{
    const [settings, updateSettings] = useState({"doslice": false, "slice": 0, "doappend": false, "append": { "fileName": "error.json", "depth": 0, "slidIn": true }});
    const [sliders, updateSliders] = useState([{ "fileName": "VIVA.json", "depth": 0, "slidIn": true }])

    //function to add new slider with click
    const slideOut = (fileName: string, depth: number) => {
        const newSlider = { fileName, depth, "slidIn": true };

        // check if we're on the bottom
        if (depth >= sliders.length) {
            // append new slider, set update settingd
            const newSliders = sliders.slice().concat([newSlider]);
            updateSliders(newSliders);
            updateSettings({"doslice": false, "slice": 0,  "doappend": false, "append": newSlider});
            return;
        }

        // check if we've requested a slider that already exists
        if (fileName === sliders[depth].fileName) {
            const newSliders = sliders.slice().map(s => {
                if (s.depth <= depth) return s;
                else return { "fileName": s.fileName, "depth": s.depth, "slidIn": false }
            })
            updateSliders(newSliders);
            updateSettings({"doslice": true, "slice": depth + 1, "doappend": false, "append": newSlider});
            return;
        }

        // only other possibility is having requested a slider not in the stack
        const newSliders = sliders.slice().map(s => {
            if (s.depth < depth) return s;
            else return { "fileName": s.fileName, "depth": s.depth, "slidIn": false }
        });
        updateSliders(newSliders);
        updateSettings({"doslice": true, "slice": depth, "doappend": true, "append": newSlider});
    }

    // called on completetion of slide transition
    const removeThenAdd = () => {
        console.log(settings)
        const newSliders = sliders.slice(0, settings.doslice ? settings.slice : sliders.length)
                                  .concat(settings.doappend ? [settings.append] : [])
        updateSliders(newSliders);
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
            >
                <Slider 
                    key = { sliderDetail.fileName } 
                    depth = { sliderDetail.depth }
                    fileName = { sliderDetail.fileName } 
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
