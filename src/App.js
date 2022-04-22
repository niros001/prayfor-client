import React from 'react';
import styled from 'styled-components';
import {Navigate, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {HowItWorks, Prayers, Help} from './components/pages'

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
        <Routes>
          <Route path="/" element={<Navigate replace to="/how-it-works" />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/prayers" element={<Prayers />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Content>
      <Footer />
    </Container>
)

export default App;
