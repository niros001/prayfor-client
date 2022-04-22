import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubTitle = styled.div`
  font-size: 18px;
  color: #5D5D5D;
  text-align: center;
`

const Donation = () => (
    <Container>
        <h2>Send Your Prayers</h2>
        <SubTitle>Do you want to pray at the Kotel but can’t get there? We’re here to help!</SubTitle>
    </Container>
)

export default Donation;
