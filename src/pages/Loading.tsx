import React from "react";
import styled from "styled-components";

const Wapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #2e66dd 0%, #639fc8 72.5%, #7ac3ce 100%);
`;
function Loading() {
  return (
    <>
      <Wapper>
        <img src={`${process.env.PUBLIC_URL}/img/loading.webp`} alt="loading" />
      </Wapper>
    </>
  );
}

export default Loading;
