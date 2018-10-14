import React from "react";
import styled from "styled-components";
import PhoneDetailComponent from "../PhoneDetailComponent";

import { PhoneType } from "../types";

const ItemWrapper = styled.div`
  flex: 1 0 45%;
  margin: 5px;
`;

export default class PhoneListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  static propTypes = {
    phone: PhoneType.isRequired
  };

  render() {
    const { phone } = this.props;
    return (
      <ItemWrapper>
        <h2>
          {phone.manufacturer} {phone.model}
        </h2>
        <PhoneDetailComponent phone={phone} />
      </ItemWrapper>
    );
  }
}
