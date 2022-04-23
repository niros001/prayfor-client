import React, {useState} from 'react';
import styled from 'styled-components';
import {Drawer, Divider, Button} from 'antd';
import {GlobalOutlined, MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import logoDesktop from '../assets/logo_desktop.svg'
import logoMobile from '../assets/Pray For_Icon.svg'

const Container = styled.div`
  padding: 8px 12px;
  border-bottom: .5px solid lightgray;
  .desktop-menu, .mobile-menu {
    align-items: center;
    justify-content: space-between;
  }
  .desktop-menu {
    display: flex;
  }
  .mobile-menu {
    display: none;
  }
  @media (max-width: 600px) {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: flex;
    }
  }
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
  @media (max-width: 600px) {
    flex-direction: column;
    a {
      font-size: 16px;
    }
  }
`;

const Extra = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  a {
    text-decoration: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: #151921 !important;
  color: white !important;
  border: none !important;
`

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
      <Container>
        <div className="desktop-menu">
          <img alt="logo" src={logoDesktop} />
          <Nav>
            <Link to="/how-it-works">How It Works?</Link>
            <Link to="/prayers">Prayers</Link>
            <Link to="/help">Help</Link>
          </Nav>
          <Extra>
            <Link to="/donation">
              <StyledButton style={{marginRight: 10}}>Donation</StyledButton>
            </Link>
            <GlobalOutlined />
          </Extra>
        </div>
        <div className="mobile-menu">
          <img alt="logo" src={logoMobile} height={50} />
          <MenuOutlined onClick={() => setVisible(true)} />
          <Drawer
              title="Menu"
              placement="right"
              onClose={() => setVisible(false)}
              visible={visible}
              width="55%"
          >
            <Nav>
              <Link to="/how-it-works" onClick={() => setVisible(false)}>How It Works?</Link>
              <Link to="/prayers" onClick={() => setVisible(false)}>Prayers</Link>
              <Link to="/help" onClick={() => setVisible(false)}>Help</Link>
              <Divider />
              <Link to="/donation" onClick={() => setVisible(false)}>
                <StyledButton>Donation</StyledButton>
              </Link>
              <Divider />
              <GlobalOutlined />
            </Nav>
          </Drawer>
        </div>
      </Container>
  );
}

export default Header;
