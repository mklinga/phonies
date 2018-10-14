import React from "react";
import styled, { keyframes } from "styled-components";
import { MdSync } from "react-icons/md";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s ease-in-out infinite;
  transform-origin: 24px 24px;
`;

const LoaderBlock = styled.div`
  padding: 50px;
  text-align: center;
  width: 100%;
`;

export default () => (
  <LoaderBlock>
    <Rotate>
      <MdSync size="48px" />
    </Rotate>
  </LoaderBlock>
);
