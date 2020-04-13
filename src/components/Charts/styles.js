import styled from "styled-components";

export const MyTooltip = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #fff;
  box-shadow: 0 0 1em #3a495b;
  border-radius: 6px;
  padding: 10px;

  P {
    font-size: 24px;
    color: #808283;
    font-family: Roboto;
    margin-bottom: 7px;
  }

  span {
    font-size: 20px;
    color: #212d47;
    font-family: Roboto;
    margin-top: 5px;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ClearButton = styled.button`
  margin-left: 15px;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #dbdbdb;
  font-weight: 200;
  font-size: 19px;
  line-height: 24px;
  color: #484848;
  background-color: #fff;
  padding: 11px 11px 9px;
`;
