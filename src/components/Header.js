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
`

const Ul = styled.ul`
  display: flex;
  li {
    margin: 0 10px;
    //border-bottom-style: solid;
    //border-bottom-width: 5px;
    //border-image: linear-gradient(180deg, transparent, white) 1;
    //:hover {
    //  border-image: linear-gradient(180deg, black, black) 1;
    //  transition: border 5.5s;
    //  font-weight: bold;
    //}
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
      <nav>
        <Ul>
          <li>
            <Link to="/how-it-works">How It Works?</Link>
          </li>
          <li>
            <Link to="/prayers">Prayers</Link>
          </li>
          <li>
            <Link to="/help">Help</Link>
          </li>
        </Ul>
      </nav>
      <Extra>
        <DonationBtn>Donation</DonationBtn>
        <AiOutlineGlobal />
      </Extra>
    </Container>
);

export default Header;
