
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

interface DerectionProp {
    derection?: Direction;
    className?: string;
    style?: React.CSSProperties;
}

const DirectionArrow: React.FC<DerectionProp> = ({
    derection = Direction.Down,
    className,
    style,
}) => {
    const arrowIamgeUrl = getArrowImageUrl(derection)
    return (
        <img
            className={className}
            style={style}
            src={arrowIamgeUrl}
            alt={"dropdown arrow image"}
        />
    )
}

function getArrowImageUrl(derection: Direction) {
    switch (derection) {
        case Direction.Up: return "https://image.smartscore.kr/club/icn/ic_arrow_line_up.svg"
        case Direction.Down: return "https://image.smartscore.kr/club/icn/ic_arrow_line_down.svg"
        case Direction.Left: return "https://image.smartscore.kr/club/icn/ic_arrow_line_left.svg"
        case Direction.Right: return "https://image.smartscore.kr/club/icn/ic_arrow_line_right.svg"
    }
}
export { Direction }
export default DirectionArrow
