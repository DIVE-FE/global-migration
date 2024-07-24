'use client';

import CountryImageSlot from "@/components/atoms/Dropdown/coutryImageSlot";
import DirectionArrow, { Direction } from "@/components/atoms/Dropdown/directionArrow";
import { useEffect, useState } from "react";

interface LanguageDropDownButtonProp {
    countryCode: "EN" | "VN" | "TH" | "ID" | "CN" | "TW";
    className?: string;
    style?: React.CSSProperties;
}

const LanguageDropDownButton: React.FC<LanguageDropDownButtonProp> = ({
    countryCode = "EN",
    className,
    style,
}) => {
    const [isFocus, setFocus] = useState(false);
    const [arrowDirection, setArrowDirention] = useState(Direction.Down)
    const focusChange = () => {
        if (isFocus) {
            setFocus(false)
        } else {
            setFocus(true)
        }
    }
    useEffect(() => {
        if (isFocus) {
            setArrowDirention(Direction.Up)
        } else {
            setArrowDirention(Direction.Down)
        }
    }, [isFocus])
    return (
        <button
            className={className}
            style={style}
            onClick={focusChange}
            onBlur={() => { setFocus(false) }}
        >
            <CountryImageSlot className={"wh-18"} countryCode={countryCode} />
            <div className={"mr-10"} />
            <span>{countryCode}</span>
            <div className={"ml-10"} />
            <DirectionArrow className={"wh-18"} derection={arrowDirection} />
        </button>
    )
}

export { LanguageDropDownButton }
