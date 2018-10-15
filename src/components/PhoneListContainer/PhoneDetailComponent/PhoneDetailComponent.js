import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import PhoneImage from "../PhoneImage";
import Fact from "../Fact";
import { PhoneType } from "../types";

const PhoneDetailContainer = styled.div`
  flex: 1 0 45%;
  margin: 5px;

  padding: 0;
  border: 1px solid #ddd;
  border-radius: 6px;
`;

const Title = styled.h2`
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
  <PhoneDetailContainer>
    <Title>
      {phone.manufacturer} {phone.model}
    </Title>
    <DetailSection>
      <PhoneImage phone={phone} />
      <div>
        <Fact label="Manufacturer" data={phone.manufacturer} />
        <Fact label="Model" data={phone.model} />
        <Fact label="Published" data={phone.year} />
        {fullDetails ? (
          <React.Fragment>
            <Fact label="Color" data={phone.color} />
            <Fact label="Screen size" data={phone.screen_size} />
          </React.Fragment>
        ) : (
          <DetailsButton onClick={() => onSelect(phone)}>Details</DetailsButton>
        )}
      </div>
    </DetailSection>
  </PhoneDetailContainer>
);

PhoneDetailComponent.propTypes = {
  phone: PhoneType.isRequired,
  fullDetails: PropTypes.bool
};

export default PhoneDetailComponent;
