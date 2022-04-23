import React from 'react';
import styled from 'styled-components';
import icon1 from '../../assets/Icon_1.svg';
import icon2 from '../../assets/Icon_2.svg';
import icon3 from '../../assets/Icon_3.svg';

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

const Steps = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 20px;
  h4 {
    text-align: center;
  }
  img {
    height: 300px;
  }
  @media (max-width: 600px) {
    img {
      height: 150px;
    }
  }
`

const Step = ({step, icon, info}) => (
    <StepWrapper>
      <h3>STEP {step}</h3>
      <img alt="icon" src={icon} height={350} />
      <h4>{info}</h4>
    </StepWrapper>
);

const HowItWorks = () => (
    <Container>
      <h2>How Pray For Works?</h2>
      <SubTitle>Do you want to pray at the Kotel but can’t get there? We’re here to help!</SubTitle>
      <Steps>
        <Step step={1} icon={icon1} info="Fill the prayer request form with your personal prayer" />
        <Step step={2} icon={icon2} info="We visit the Kotel and deliver your printed prayer personally" />
        <Step step={3} icon={icon3} info="We’ll send a personal confirmation directly to your email" />
      </Steps>
    </Container>
)

export default HowItWorks;
