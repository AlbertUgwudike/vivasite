import React, { useEffect, useState } from 'react'
import { sliderPropsType, buttonPropsType, Path } from './Types'
import { fetchChildren, fetchSliderData } from './funcs'

const PathSlider = (props: sliderPropsType) => 
{
    console.log("pathslider", props.path);
    // title is simply the last route in the path
    const title = props.path.split("/").pop();

    // slider data includes its title and a list of its children
    const [sliderData, updateSliderData] = useState([] as Path[]);
    
    // each slider compenent fetches its own data
    useEffect(() => {  
        fetchChildren(props.path).then(updateSliderData)
    }, []);

    const renderButton = (path: Path) => {
        // this is ugly
        const newPath = path.isEndpoint ? path.path.toLowerCase() + ".json" : props.path + "/" + path.path;
        return (
            <button 
                className = "sliderOption" 
                onClick = { () => props.onClick(newPath, props.depth + 1) } 
            >
                {path.path} 
            </button>
        );
    } 
   
    const renderButtonGrid = (pathList: Path[] ) => {
        const len = pathList.length;
        const rowCount = len % 2 ? (len + 1) / 2 : len / 2;

        return Array(rowCount).fill(0).reduce((acc, _, i) => {
            return acc.concat([
                <div key = {i} className = "col-md-auto debuge">
                    <div className = "row">
                        { 2 * i < len     ? renderButton(pathList[2 * i]) : null }
                    </div>
                    <div className = "row">
                        { 2 * i + 1 < len ? renderButton(pathList[2 * i + 1]) : null }
                    </div>
                </div>
            ])
        }, [])
    } 

    return (
        <div className = { "container-fluid debuge" }>
            <div  className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-auto sliderHead debuge"> {title} </div>
                <div className = "col sliderTail debuge">
                    <div className = "row">
                        { renderButtonGrid(sliderData) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PathSlider;