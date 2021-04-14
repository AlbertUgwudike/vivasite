import { useState } from 'react';
import Header from './Header';
import PathSlider from './PathSlider';
import InfoSlider from './InfoSlider'
import { sliderDetailType, settingsType, USSType } from './Types'
import { CSSTransition } from 'react-transition-group'

const App = () => 
{
    const [settings, updateSettings] = useState({"slice": false, "append": false} as settingsType);
    const [sliders, updateSliders] = useState([{ "type": "PathSlider", "path": "VIVA", "depth": 0, "slidIn": true } as sliderDetailType]);

    const updateSlidersAndSettings: USSType = (f, arr, sets) => {
        const newSliders = sliders.map(s => {
            if (f(s)) return s;
            else return { "type": s.type, "path": s.path, "depth": s.depth, "slidIn": false }
        }).concat(arr);
        updateSliders(newSliders as sliderDetailType[]);
        updateSettings(sets);
    }

    // add details of new slider to list
    const addSlider = (path: string, depth: number) => {
        console.log("sliders", sliders);
        console.log("path", path);
        const slideDirection = path.split(".").length === 2 ? "InfoSlider" : "PathSlider";
        const newSlider: sliderDetailType = { "type": slideDirection, path, depth, "slidIn": true } ;
        
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

    const renderSlider = (sliderDetail: sliderDetailType) => {
        const slider = sliderDetail.type === "InfoSlider" ? 
            <InfoSlider source = { sliderDetail.path } /> :
            <PathSlider  
                depth = { sliderDetail.depth }
                path = { sliderDetail.path } 
                onClick = { addSlider }
            />;

        return (
            <CSSTransition 
                in = { sliderDetail.slidIn }
                timeout = { 1000 }
                classNames = { sliderDetail.type === "PathSlider" ?  "display" : "rightdisplay" }
                unmountOnExit 
                onExited = { removeThenAdd }
                appear
                key = { sliderDetail.path }
            >
                { slider }
            </CSSTransition>
        );
    }

    return (
        <div>
            <Header />
            { sliders.map(renderSlider) }
        </div>
    )
}

export default App;