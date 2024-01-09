import React from "react";
import { SubmitBtnCSS } from "../../style/components/common/SubmitBtnCSS";
import { SubmitBtnProps } from "../../types/SubmitBtnProps";

function SubmitBtn({ children, fontSize, bgcolor, color }: SubmitBtnProps) {
  return (
    <SubmitBtnCSS
      children={children}
      bgcolor={bgcolor}
      fontSize={fontSize}
      color={color}
    />
  );
}

export default SubmitBtn;
