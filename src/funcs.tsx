import { sliderDataType } from './Types'

type FSD = (fileName: string) => Promise<sliderDataType>;
export const fetchSliderData: FSD = async (fileName) => {
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

type FC = (path: string) => Promise<string[]>;
export const fetchChildren: FC = (path) => {
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ path })
    };

    return (
        fetch("http://localhost:3000/api", options)
        .then((res) => res.json())
    );
}