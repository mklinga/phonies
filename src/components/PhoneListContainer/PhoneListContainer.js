import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getPhoneList,
  getError,
  getIsFetchingPhones,
  getSelectedPhone
} from "../../selectors";
import {
  fetchPhones as fetchPhonesAction,
  selectPhoneForDetails as selectPhoneForDetailsAction,
  resetSelectedPhone as resetSelectedPhoneAction
} from "../../actions";

import Loader from "../Loader";
import Error from "../Error";

import PhoneDetailComponent from "./PhoneDetailComponent";
import { PhoneType } from "./types";

const PhoneListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const ReturnLink = styled.span`
  display: block;
  text-align: right;
  text-decoration: underline;
  color: blue;
  cursor: pointer;
`;
export class PhoneListContainer extends React.Component {
  static propTypes = {
    phones: PropTypes.arrayOf(PhoneType)
  };

  static defaultProps = {
    phones: []
  };

  componentDidMount() {
    this.props.fetchPhones();
  }

  onSelect = phone => {
    this.props.selectPhoneForDetails(phone);
  };

  resetSelectedPhone = () => this.props.resetSelectedPhone();

  render() {
    const { isFetching, error, selectedPhone } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (error) {
      return <Error error={error} />;
    }

    if (selectedPhone) {
      return (
        <div>
          <ReturnLink onClick={this.resetSelectedPhone}>
            Back to the list
          </ReturnLink>
          <PhoneDetailComponent phone={selectedPhone} fullDetails />
        </div>
      );
    }

    return (
      <PhoneListWrapper>
        {this.props.phones.map(phone => (
          <PhoneDetailComponent
            key={phone.id}
            phone={phone}
            onSelect={this.onSelect}
          />
        ))}
      </PhoneListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  phones: getPhoneList(state),
  selectedPhone: getSelectedPhone(state),
  isFetching: getIsFetchingPhones(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhonesAction()),
  selectPhoneForDetails: phone => dispatch(selectPhoneForDetailsAction(phone)),
  resetSelectedPhone: () => dispatch(resetSelectedPhoneAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneListContainer);
