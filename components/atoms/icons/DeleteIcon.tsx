import React from "react";
import classNames from "classnames";


interface DeleteIconProps {
  className?: string;
  onClick?: () => void;
}

const DeleteIcon = ({ className, onClick }: DeleteIconProps) => {
  return (
    <span
      className={classNames(className)}
      onClick={onClick}
      role="img"
      style={{ backgroundImage: "url(https://image.smartscore.kr/club/icn/ic_delete_gray.svg)" }}
    />
  );
};

export default DeleteIcon;
