import React, { Component } from "react";
import styled from "styled-components";

import PhoneListContainer from "./components/PhoneListContainer";

const AppContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background: white;
  height: 100vh;
  min-height: 100vh;
`;

const Header = styled.header`
  padding: 10px 50px;
`;

const Title = styled.h1`
  color: #333333;
  border-bottom: 5px solid #1fb9cf;
  text-align: right;
`;

const MainContainer = styled.main`
  padding: 10px 50px;
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <Title>Phone viewer</Title>
        </Header>
        <MainContainer>
          <PhoneListContainer phones={this.props.phones} />
        </MainContainer>
      </AppContainer>
    );
  }
}
