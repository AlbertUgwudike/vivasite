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


export type sliderPropsType = {
    "fileName": string;
    "depth": number;
    "onClick": (fileName: string, depth: number) => void;
}

export type sliderDetailType = {
    "fileName": string;
    "depth": number;
    "slidIn": boolean;
}