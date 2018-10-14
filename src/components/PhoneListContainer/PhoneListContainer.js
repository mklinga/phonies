import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getPhoneList, getError, getIsFetchingPhones } from "../../selectors";
import { fetchPhones as fetchPhonesAction } from "../../actions";

import Loader from "../Loader";
import Error from "../Error";

import PhoneListItem from "./PhoneListItem";
import { PhoneType } from "./types";

const PhoneListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
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

  render() {
    const { isFetching, error } = this.props;

    if (isFetching) {
      return <Loader />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return (
      <PhoneListWrapper>
        {this.props.phones.map(phone => (
          <PhoneListItem key={phone.id} phone={phone} />
        ))}
      </PhoneListWrapper>
    );
  }
}

const mapStateToProps = state => ({
  phones: getPhoneList(state),
  isFetching: getIsFetchingPhones(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhones: () => dispatch(fetchPhonesAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneListContainer);
