"use client";

import { createGlobalStyle, css } from "styled-components";

const styles = css`
  body: {
    position: relative;
    margin: 0;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
