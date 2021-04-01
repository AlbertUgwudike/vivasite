export type sliderPropsType = {
    "fileName": string;
    "onClick": (fileName: string) => void;
}

export type sliderDataType = {
    "title": string;
    "children": {
        "title": string;
        "source": string;
    }[]
}

export type buttonPropsType = {
    "title": string;
    "source": string;
}