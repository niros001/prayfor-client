import React from 'react';
import styled from 'styled-components';
import {AiOutlineGlobal} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import logo from '../assets/logo_ba.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: .5px solid lightgray;
`

const Nav = styled.nav`
  display: flex;
  a {
    color: black;
    font-size: 20px;
    margin: 0 10px;
    text-decoration-line: none;
    :hover {
      text-decoration-line: underline;
    }
  }
`;

const Extra = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
`;

const DonationBtn = styled.div`
  padding: 12px 24px;
  background-color: #151921;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`

const Header = () => (
    <Container>
      <img alt="logo" src={logo} />
      <Nav>
        <Link to="/how-it-works">How It Works?</Link>
        <Link to="/prayers">Prayers</Link>
        <Link to="/help">Help</Link>
      </Nav>
      <Extra>
        <Link to="/donation">
          <DonationBtn>Donation</DonationBtn>
        </Link>
        <AiOutlineGlobal />
      </Extra>
    </Container>
);

export default Header;
