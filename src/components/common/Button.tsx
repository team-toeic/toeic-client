import React, { ReactNode } from "react";
import { ButtonCSS } from "../../style/components/common/ButtonCSS";
import { useNavigate } from "react-router-dom";

export type ButtonProps = {
  children: ReactNode;
  textsize?: string;
  bgcolor?: string;
  color?: string;
  id?: string;
};

function Button({
  children,
  textsize,
  bgcolor,
  color = "#fff",
  id,
}: ButtonProps) {
  const navigate = useNavigate();

  const handlePath = (e: React.MouseEvent<HTMLButtonElement>) => {
    const clickElem = e.target as HTMLButtonElement;

    navigate(`/${clickElem.id}`);
  };

  return (
    <ButtonCSS
      children={children}
      textsize={textsize}
      bgcolor={bgcolor}
      color={color}
      id={id}
      onClick={(e) => handlePath(e)}
    />
  );
}

export default React.memo(Button);
