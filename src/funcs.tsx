import {sliderDataType} from './Types'

const fetchSliderData = async (fileName: string): Promise<sliderDataType> => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
            "file" : fileName
        })
    };

    return (
        fetch("http://localhost:3000/api", options)
        .then((res) => res.json())
    );
}

export default fetchSliderData