import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import React from 'react'
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';

const App = () => {
  return (
    <S.App>
        <GLOBAL_STYLE/>
        <Hero/>
        <Projects/>
        {/* <About/> */}
    </S.App>
  )
}

export default App

const GLOBAL_STYLE = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body , html {
    scroll-behavior: smooth;
  }
`

const S = {}

S.App = styled.div`
    width: 100vw;
    height: 200vh;
    background: rgb(108,245,255);
    overflow: hidden;
`

