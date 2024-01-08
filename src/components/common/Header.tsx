import React from "react";
import Logo from "./Logo";
import Mascort from "./Mascort";
import { HeaderCSS } from "../../style/components/common/HeaderCSS";

function Header() {
  return (
    <HeaderCSS>
      <Logo />
      <Mascort />
    </HeaderCSS>
  );
}

export default Header;
