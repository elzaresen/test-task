"use client";

import { InputHTMLAttributes } from "react";
import styled from "styled-components";

const Component = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding: .5rem 1rem;
  outline: none;
  font-size: 1rem;
  &:focus {
    border-color: #aaa;
  }
`;

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <Component {...props} />;
};

export default Input;
