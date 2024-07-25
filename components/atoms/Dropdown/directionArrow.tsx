
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

interface DirectionProp {
    direction?: Direction;
    className?: string;
    style?: React.CSSProperties;
}

const DirectionArrow: React.FC<DirectionProp> = ({
    direction = Direction.Down,
    className,
    style,
}) => {
    const arrowImageUrl = getArrowImageUrl(direction)
    return (
        <img
            className={className}
            style={style}
            src={arrowImageUrl}
            alt={"dropdown arrow image"}
        />
    )
}

function getArrowImageUrl(direction: Direction) {
    switch (direction) {
        case Direction.Up: return "https://image.smartscore.kr/club/icn/ic_arrow_line_up.svg"
        case Direction.Down: return "https://image.smartscore.kr/club/icn/ic_arrow_line_down.svg"
        case Direction.Left: return "https://image.smartscore.kr/club/icn/ic_arrow_line_left.svg"
        case Direction.Right: return "https://image.smartscore.kr/club/icn/ic_arrow_line_right.svg"
    }
}
export { Direction }
export default DirectionArrow
