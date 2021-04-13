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
    "path": string;
    "depth": number;
    "onClick": (fileName: string, depth: number) => void;
}

export type sliderDetailType = {
    "path": string;
    "depth": number;
    "slidIn": boolean;
}

export type settingsType = {
    "slice": number | false;
    "append": sliderDetailType | false;
}

export type USSType = (f: (s: sliderDetailType) => boolean, arr: sliderDetailType[], sets: settingsType) => void