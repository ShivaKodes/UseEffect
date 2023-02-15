import React from "react";
import styled from "styled-components";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function Button({ nextPrev, handleClick }) {
  return (
    <ButtonContainer onClick={() => handleClick(nextPrev)}>
      {nextPrev === "next" ? <IoIosArrowForward /> : <IoIosArrowBack />}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: #f5f5f5;
  }
`;
