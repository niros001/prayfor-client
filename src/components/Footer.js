import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #151921;
  color: white;
  padding: 8px 12px;
`

const Links = styled.div`
  display: flex;
  a {
    margin-left: 12px;
    color: white !important;
  }
`

const Footer = () => (
    <Container>
      <div>@ Copyrights {new Date().getFullYear()}. All Rights Reserved.</div>
      <Links>
        <a>Privacy Policy</a>
        <a>Terms and Condition</a>
      </Links>
    </Container>
);

export default Footer;
