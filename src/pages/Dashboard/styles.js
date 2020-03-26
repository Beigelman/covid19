import styled from "styled-components";
import PerfectScrollbar from "react-perfect-scrollbar";

export const Container = styled.div`
  height: 91vh;
  padding: 15px;
`;

export const InfectedCases = styled.div`
  flex: 1;
  margin-right: 15px;
  height: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #5a666e;
  padding: 15px;
  border-radius: 6px;

  strong {
    font-size: 24px;
    font-family: Roboto;
    color: #f7f7f7;
    text-align: center;
    margin-bottom: 20px;
  }

  li {
    width: 100%;
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  padding: 0px 10px;
  overflow-y: scroll;

  ul {
    height: -webkit-fill-available;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: lightgrey;
    border-radius: 10px;
  }
`;

export const TotalNumber = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 44px;
    color: #f7f7f7;
  }
`;
