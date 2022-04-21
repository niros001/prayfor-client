import React from 'react';
import styled from 'styled-components';
import {AiOutlineGlobal} from 'react-icons/ai';
import logo from '../assets/logo_ba.svg'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
`

const Menu = styled.div`
  display: flex;
  div {
    margin: 0 10px;
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
      <Menu>
        <div>How It Works?</div>
        <div>Prayers</div>
        <div>Help</div>
      </Menu>
      <Extra>
        <DonationBtn>Donation</DonationBtn>
        <AiOutlineGlobal />
      </Extra>
    </Container>
);

export default Header;
