'use client';

import CountryImageSlot from "@/components/atoms/Dropdown/countryImageSlot";
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
            <CountryImageSlot className={"wh-18"} countryCode={countryCode} />
            <div className={"mr-10"} />
            <span>{countryCode}</span>
            <div className={"ml-10"} />
            <DirectionArrow className={"wh-18"} direction={arrowDirection} />
        </div>
    )
}

export { LanguageDropDownButton }
