import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #ee3333;
  text-align: center;
`;

const ErrorMessage = styled.div`
  text-align: center;
`;

export default ({ error }) => (
  <div>
    <Title>Something went wrong, please make sure the API is running.</Title>
    <ErrorMessage>{error}</ErrorMessage>
  </div>
);
