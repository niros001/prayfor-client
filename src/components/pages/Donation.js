import React from 'react';
import styled from 'styled-components';
import {Input} from 'antd';
import PrimaryBtn from '../PrimatyBtn';

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

const Form = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: flex-start;
`

const TextArea = styled(Input.TextArea)`
  resize: none;
`

// const Input = styled.input`
//   padding: 12px;
//   margin-left: 10px;
//   :first-child {
//     margin-left: unset;
//   }
// `

const Donation = () => (
    <Container>
      <h2>Send Your Prayers</h2>
      <SubTitle>Do you want to pray at the Kotel but can’t get there? We’re here to help!</SubTitle>
      <br />
      <Form>
        <h3>1. Your Prayer</h3>
        <TextArea
            placeholder="You can pray for anything you like, just type it here...B”H"
            allowClear
            autoSize={{minRows: 4, maxRows: 6}}
        />
        <br />
        <h3>2. Pray For...</h3>
        <div style={{display: 'flex'}}>
          <Input />
          <Input />
          <Input />
          <Input />
        </div>
      </Form>
      <PrimaryBtn>
        SEND
      </PrimaryBtn>
    </Container>
)

export default Donation;
