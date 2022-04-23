import React from 'react';
import styled from 'styled-components';
import {Navigate, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {HowItWorks, Prayers, Help, Donation} from './components/pages'

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px;
  background-color: #FBFBFB;
  overflow-y: auto;
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
          <Route path="/donation" element={<Donation />} />
        </Routes>
      </Content>
      <Footer />
    </Container>
)

export default App;
