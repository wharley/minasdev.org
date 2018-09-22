import styled from "styled-components";

export const Wrapper = styled.h1`
  width: 170px;
  height: 0;
  padding-top: 170px;
  overflow: hidden;
  position: relative;
  z-index: 2;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 170px;
    height: 170px;
  }
`;
