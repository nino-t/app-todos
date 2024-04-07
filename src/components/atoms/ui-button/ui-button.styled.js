import styled from "styled-components";

export const Button = styled.button`
  border-radius: 10px;
  padding: 10px 30px;
  font-size: 18px;
  margin: 10px;
  box-shadow: inset 2px 2px 3px rgba(0,0,0,0.4);  
  border: 0;
  color: #fff;
  display: flex;

  &.btn-primary {
    background-color: blue;
  }

  &.btn-secondary {
    background-color: gray;
  }

  &.btn-danger {
    background-color: red;
  }
`;

export default Button;
