import React from "react";
import styled from "styled-components";

const FactSection = styled.div`
  padding: 3px 10px;
`;

const Key = styled.span`
  font-weight: bold;
  &:after {
    content: ":";
  }
  padding-right: 8px;
`;

const Fact = styled.span`
  color: black;
`;

export default ({ label, data }) => (
  <FactSection>
    <Key>{label}</Key>
    <Fact>{data}</Fact>
  </FactSection>
);
