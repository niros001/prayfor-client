import React from 'react';
import styled from 'styled-components';

const DonationBtn = styled.div`
  padding: 12px 24px;
  background-color: #151921;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
`;

const PrimaryBtn = ({children}) => (
    <DonationBtn>
      {children}
    </DonationBtn>
)

export default PrimaryBtn;
