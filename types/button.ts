export interface PaddingValues {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const defaultPaddingValue: PaddingValues = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

export interface MarginValues {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

export const defaultMarginValue: MarginValues = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

interface ButtonEventHandlers {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onDoubleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchMove?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchCancel?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonProps extends ButtonEventHandlers {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
}
