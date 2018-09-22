import styled from "styled-components";

export const Wrapper = styled.header`
  &:before {
    content: "";
    height: 3px;
    width: 100%;
    background-color: #e64c3b;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`;
