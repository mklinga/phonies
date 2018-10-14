import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import PhoneImage from "../PhoneImage";
import { PhoneType } from "../types";

const ItemWrapper = styled.div`
  flex: 1 0 45%;
  margin: 5px;
  cursor: pointer;

  padding: 0;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const ItemHeader = styled.h2`
  margin: 0 0 10px 0;
  background: #eee;
  padding: 8px 16px;
`;

const DetailSection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
    text-align: center;
  }

  padding: 15px;
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

const DetailsButton = styled.button`
  margin: 5px 8px;
  color: white;
  padding: 8px 16px;
  background: #e67e22;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);

  &:hover,
  &:focus {
    background-color: #d35400;
    cursor: pointer;
  }
`;

export const PhoneDetailComponent = ({ phone, fullDetails, onSelect }) => (
  <ItemWrapper>
    <ItemHeader>
      {phone.manufacturer} {phone.model}
    </ItemHeader>
    <DetailSection>
      <PhoneImage phone={phone} />
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
          <Key>Published</Key>
          <Fact>{phone.year}</Fact>
        </FactSection>
        {fullDetails ? (
          <React.Fragment>
            <FactSection>
              <Key>Color</Key>
              <Fact>{phone.color}</Fact>
            </FactSection>
            <FactSection>
              <Key>Screen size</Key>
              <Fact>{phone.screen_size}"</Fact>
            </FactSection>
          </React.Fragment>
        ) : (
          <DetailsButton onClick={() => onSelect(phone)}>Details</DetailsButton>
        )}
      </div>
    </DetailSection>
  </ItemWrapper>
);

PhoneDetailComponent.propTypes = {
  phone: PhoneType.isRequired,
  fullDetails: PropTypes.bool
};

export default PhoneDetailComponent;
