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

export type infoSliderPropsType = { 
    "source": string;
}

export type sliderDetailType = {
    "type": "PathSlider" | "InfoSlider";
    "path": string;
    "depth": number;
    "slidIn": boolean;
}

export type settingsType = {
    "slice": number | false;
    "append": sliderDetailType | false;
}

export type USSType = (f: (s: sliderDetailType) => boolean, arr: sliderDetailType[], sets: settingsType) => void

export type infoType = {
    "path": string;
    "title": string;
    "Definition": string;
    "Aetiology": string;
    "Epidemiology": string;
    "Symptoms": string;
    "Complications": string;
    "RiskFactors": string;
    "Investigations": string;
    "Management": string;
}

export type Path = {
    "isEndpoint": boolean; 
    "path": string;
}