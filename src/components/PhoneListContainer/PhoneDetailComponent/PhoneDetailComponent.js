import React from "react";
import styled from "styled-components";

import { PhoneType } from "../types";

const makeImageUrl = image => `/images/${image}`;

const DetailSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

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

export const PhoneDetailComponent = ({ phone }) => (
  <DetailSection>
    <div>
      <img src={makeImageUrl(phone.image)} />
    </div>
    <div>
      <FactSection>
        <Key>Manufacturer</Key>
        <Fact>{phone.manufacturer}</Fact>
      </FactSection>
      <FactSection>
        <Key>Model</Key>
        <Fact>{phone.model}</Fact>
      </FactSection>
      <FactSection>
        <Key>Year published</Key>
        <Fact>{phone.year}</Fact>
      </FactSection>
      <FactSection>
        <Key>Screen size</Key>
        <Fact>{`${phone.screen_size}"`}</Fact>
      </FactSection>
      <FactSection>
        <Key>Color</Key>
        <Fact>{phone.color}</Fact>
      </FactSection>
    </div>
  </DetailSection>
);

PhoneDetailComponent.propTypes = {
  phone: PhoneType.isRequired
};

export default PhoneDetailComponent;
