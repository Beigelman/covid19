import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background: #5a666e;
  border-radius: 6px;
  padding: 10px;

  p {
    color: #f7f7f7;
    font-size: 16px;
    font-family: Roboto;

    & + p {
      color: #0e1232;
      font-size: 40px;
      font-family: Roboto;
    }
  }
`;
