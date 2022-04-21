import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const App = () => (
    <Container>
      <Header />
      <Content>
        App
      </Content>
      <Footer />
    </Container>
)

export default App;
