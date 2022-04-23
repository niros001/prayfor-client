import React, {useCallback} from 'react';
import styled from 'styled-components';
import {Input, Select, Form, Button, Checkbox} from 'antd';

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

const TextArea = styled(Input.TextArea)`
  resize: none;
`

const StyledButton = styled(Button)`
  background-color: #151921 !important;
  color: white !important;
  border: none !important;
  width: 200px;
`

const Donation = () => {
  const onFinish = useCallback((values) => {
    console.log({values});
  }, [])

  const onFinishFailed = useCallback((values) => {
    console.log({values});
  }, [])

  return (
      <Container>
        <h2>Send Your Prayers</h2>
        <SubTitle>Do you want to pray at the Kotel but can’t get there? We’re here to help!</SubTitle>
        <Form
            style={{width: '100%', alignSelf: 'flex-start'}}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
          <h3>1. Your Prayer</h3>
          <Form.Item
              label="Pray"
              name="pray"
              rules={[{required: true, message: 'Please input your pray!'}]}
          >
            <TextArea
                placeholder="You can pray for anything you like, just type it here...B”H"
                allowClear
                autoSize={{minRows: 4, maxRows: 6}}
            />
          </Form.Item>
          <br />
          <h3>2. Pray For...</h3>
          <Form.Item
              label="Firstname"
              name="firstname"
              rules={[{required: true, message: 'Please input your firstname!'}]}
          >
            <Input placeholder="First Name" style={{maxWidth: 200}} />
          </Form.Item>
          <Form.Item
              label="Lastname"
              name="lastname"
              rules={[{required: true, message: 'Please input your lastname!'}]}
          >
            <Input placeholder="First Name" style={{maxWidth: 200}} />
          </Form.Item>
          <Form.Item
              label="Gender"
              name="gender"
              rules={[{required: true, message: 'Please select your gender!'}]}
          >
            <Select placeholder="Gender" style={{maxWidth: 200}} onChange={(value) => value}>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="female">Female</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
              label="Mother's Name"
              name="mother"
              rules={[{required: true, message: 'Please input your mother\'s name!'}]}
          >
            <Input placeholder="Mother's Name" style={{maxWidth: 200}} />
          </Form.Item>
          <Form.Item
              label="Email address"
              name="email"
              rules={[
                  {required: true, message: 'Please input your email address!'},
                {
                  pattern: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
                  message: 'Email address is not valid',
                },
              ]}
          >
            <Input placeholder="Email address" style={{maxWidth: 200}} />
          </Form.Item>
          <Form.Item name="info" valuePropName="checked" wrapperCol={{span: 10}}>
            <Checkbox>
              I am interested to receive a confirmation that the name I sent was transferred for prayer at Send
              the Western Wall, as well as receive general information and updates from the PrayFor.Online website.
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <StyledButton htmlType="submit">
              SEND
            </StyledButton>
          </Form.Item>
        </Form>
        <b style={{alignSelf: 'flex-start'}}>
          *We do not charge anything for the service, we are honored to pray for you closer to God.<br />
          Your donations are kindly accepted to cover the costs of travel, print, photography, and security arrangements.
        </b>
      </Container>
  );
};

export default Donation;
