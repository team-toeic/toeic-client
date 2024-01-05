import styled from "styled-components";

export const HomeCSS = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./img/background_img.webp");
  text-align: center;

  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15em;

    > .logo_wrap {
      width: 20em;
      cursor: pointer;
      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    > span {
      transform: translate(-4em, -1em);
      text-align: start;
      text-wrap: nowrap;
    }
  }

  > .mascot_wrap {
    display: flex;
    justify-content: center;

    > div {
      width: 8em;
      height: 8em;
      justify-content: center;
      align-items: center;

      > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  > .btn_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 30px;

    > .line {
      width: 30%;
      height: 3px;
      background-color: #fff;
    }

    & ::after {
      content: "";
      display: block;
      width: 100%;
      height: 65vh;
      background-color: #fefec0;
      position: absolute;
      z-index: -1;
      bottom: 0;
      left: 0;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
    }
  }

  .footer {
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
