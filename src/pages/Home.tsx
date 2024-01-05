import React from "react";
import { HomeCSS } from "../style/pages/HomeCSS";
import Button from "../components/common/Button";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <HomeCSS>
      <div className="banner">
        <div className="logo_wrap">
          <img
            src={`${process.env.PUBLIC_URL}/img/toeicLogo.webp`}
            alt="logo"
          />
        </div>
        <span>
          서비스를 설명하는 문구
          <br />
          어떠한 문구
        </span>
      </div>
      <div className="mascot_wrap">
        <div>
          <img
            src={`${process.env.PUBLIC_URL}img/mascot.webp`}
            alt="마스코트"
          />
        </div>
      </div>
      <div className="btn_wrap">
        <Button children="로그인" id="login" />
        <Button children="회원가입" bgcolor="#A1EE81" id="register" />
        <div className="line"></div>
        <Button children="앱 다운받기 ↓" bgcolor="#E0C2FF" />
      </div>
      <div
        className="footer"
        onClick={() => {
          window.open("https://github.com/orgs/team-toeic/repositories");
        }}
      >
        <div>
          <span>
            <FaGithub />
          </span>
        </div>
      </div>
    </HomeCSS>
  );
}

export default Home;
