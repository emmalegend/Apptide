import React from 'react'
import Container1 from './components/Container1/Container1'
import Container2 from './components/Container2/Container2'
import Container3 from './components/Container3/Container3'
import Container4 from './components/Container4/Container4'
import Container5 from './components/Container5/Container5'
import Container6 from './components/Container6/Container6'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Lines from './components/Lines/Lines'
import NavBar from './components/NavBar/NavBar'
import Polygon from './components/Polygon/Polygon'

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Lines />
      <Polygon />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Footer />
    </>
  )
}

export default App
