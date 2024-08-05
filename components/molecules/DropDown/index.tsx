'use client';

import DirectionArrow, { Direction } from "@/components/atoms/Dropdown/directionArrow";
import { useEffect, useState } from "react";

const LANGUAGE = {
    english:{
        languageCode: "EN",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_en.png",
            alt: "Flag of United State Of America",
        }
    },
    vietnamese:{
        languageCode: "VI",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_ti.png",
            alt: "Flag of North Vietnam",
        }
    },
    thai:{
        languageCode: "TH",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_vn.png",
            alt: "Flag of Thailand",
        }
    },
    indonesian:{
        languageCode: "ID",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_id.png",
            alt: "Flag of Republic of Indonesia",
        }
    },
    chinese:{
        languageCode: "CN",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_cn.png",
            alt: "Flag of China",
        }
    },
    taiwanese:{
        languageCode: "TW",
        image:{
            src:"https://image.smartscore.kr/smartscore_gloabl/icon/ic_tw.png",
            alt: "Flag of Taiwan",
        }
    },
} as const

type LANGUAGE = typeof LANGUAGE[keyof typeof LANGUAGE];

interface LanguageDropDownButtonProp {
    language: LANGUAGE;
    className?: string;
    style?: React.CSSProperties;
}

const LanguageDropDownButton: React.FC<LanguageDropDownButtonProp> = ({
    language = LANGUAGE.english,
    className,
    style,
}) => {
    const [isFocus, setFocus] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(Direction.Down)
    const focusChange = () => {
        if (isFocus) {
            setFocus(false)
        } else {
            setFocus(true)
        }
    }
    useEffect(() => {
        if (isFocus) {
            setArrowDirection(Direction.Up)
        } else {
            setArrowDirection(Direction.Down)
        }
    }, [isFocus])
    return (
        <div
            className={className}
            style={style}
            onClick={focusChange}
            onBlur={() => { setFocus(false) }}
        >
            <img className={"wh-18"} src={language.image.src} alt={language.image.alt}/>
            <div className={"mr-10"} />
            <span>{language.languageCode}</span>
            <div className={"ml-10"} />
            <DirectionArrow className={"wh-18"} direction={arrowDirection} />
        </div>
    )
}

export { LanguageDropDownButton, LANGUAGE }
