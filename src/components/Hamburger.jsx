import React, { useState } from "react";
import styled from "styled-components";
import Category from "./Category";

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 101;
  display: none;

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
   padding-left: ${({ open }) => open ? '30px' : '0'};

  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#a1d0a0' : '#7fc37e'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;


    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;


function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
    <StyledHamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledHamburger>
    <Category open={open}/>
    </>
  );
}

export default Hamburger;
