import React from "react";
import styled from "styled-components";

function Button(props) {
  const { title } = props;
  return <ButtonContainer>{title}</ButtonContainer>;
}

export default Button;

const ButtonContainer = styled.div`
  width: 5rem;
  height: 2rem;
  border-radius: 1rem;
  box-shadow: 0.8rem 0.8rem 1.4rem rgba(200, 208, 231, 1),
    -0.2rem -0.2rem 1.8rem rgba(255, 255, 255, 1);
  justify-self: center;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  cursor: pointer;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  color: #6f6f6f;

  &:active {
    box-shadow: inset -2px -2px 4px rgb(255 255 255 / 7%),
      inset 2px 2px 6px rgb(0 0 0 / 80%);
  }

  &:hover {
    color: #00fff1;
  }
`;
