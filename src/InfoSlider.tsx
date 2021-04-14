
import { useEffect, useState } from 'react'
import { infoSliderPropsType, infoType } from './Types'
import { fetchSliderJSON } from './funcs'

const InfoSlider = (props: infoSliderPropsType) => {
    const [sliderData, updateSliderData] = useState({} as infoType);

    useEffect(() => {  
        fetchSliderJSON(props.source).then(updateSliderData)
    }, []);

    const renderInfo = (kvp: [string, string]) => {
        return (
            <div className = "row">
                { kvp[0] + " == " + kvp[1] }
            </div>
        );
    }

    return (
        <div className = { "container-fluid debuge" }>
            <div  className = "row">
                <div className = "col sliderTail debuge"></div>
                <div className = "col-md-auto infoHead debuge"> { sliderData.title } </div>
                <div className = "col-md-1"></div>
            </div>
            <div  className = "row">
                <div className = "col info debuge">
                        { Object.entries(sliderData).map(renderInfo) }
                </div>
                <div className = "col-md-1"></div>
            </div>
        </div>
    );
}

export default InfoSlider;