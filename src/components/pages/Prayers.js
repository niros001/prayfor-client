import React from 'react';
import styled from 'styled-components';
import Empty from '../Empty';

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

const Prayers = () => (
    <Container>
      <h2>Last Prayers</h2>
      <SubTitle>Every prayer request delivered, detailed confirmation provided throw email.</SubTitle>
      <Empty />
    </Container>
)

export default Prayers;
