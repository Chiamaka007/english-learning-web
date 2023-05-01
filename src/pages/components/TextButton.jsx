import { Icon } from "@iconify/react";
import React, { useState, HTMLAttributes } from "react";

const TextButton = (props) => {
  const { id, newText, oldText, className, Icon, activeClassName } = props;
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive ? activeClassName : className
      } flex items-center gap-2`}
    >
      {Icon}

      {isActive ? <div>{newText}</div> : <div>{oldText}</div>}
    </button>
  );
};

export default TextButton;
