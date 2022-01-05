import React from 'react'
import Container1 from './components/Container1/Container1'
import Container2 from './components/Container2/Container2'
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
    </>
  )
}

export default App
