import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Opacity = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: #f7f7f7;
  opacity: 0.1;
  z-index: 0;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    z-index: 99;

    img {
      cursor: pointer;
      height: 55px;
      width: 120px;
      margin-right: 20px;
      border-right: 1px solid #eee;
    }

    p {
      font-weight: bold;
      color: #fff;
    }
  }

  aside {
    margin: 0 auto;
    display: flex;
    align-items: center;
    z-index: 99;

    a {
      margin-right: 30px;
      font-family: Roboto;
      font-size: 20px;
      color: lightgrey;
    }
  }
`;
