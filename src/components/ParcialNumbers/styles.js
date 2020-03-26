import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  flex: 1;
  background: ${props => (props.selected ? "#0e1232" : "#f7f7f7")};
  border-radius: 6px;
  margin: 10px 0;
  box-shadow: 0 0 1em #000;
  cursor: pointer;

  span {
    color: ${props => (props.selected ? "#f7f7f7" : "#0e1232")};
    font-size: 20px;
    margin-left: 10px;

    & + span {
      color: #808283;
      font-size: 24px;
      margin-right: 10px;
    }
  }
`;
