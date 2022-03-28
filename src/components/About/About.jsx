import styled from 'styled-components'

import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

const About = () => {
    const [yChange, setYChange] = useState(-100)
    const aboutRef = useRef()
    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight
      
        const scrolled = winScroll / height
        console.log(aboutRef)
        aboutRef.current.style.transform = `translateY(-${scrolled * 140}%)`
      }
    
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    })
  return (
    <S.About ref={aboutRef}>
      <S.Title>About Me</S.Title>
    </S.About>
  )
}

export default About

const S = {}

S.About = styled.div`
    width: 100vw;
    height: 120vh;
    background: rgb(50,50,50);
    position: relative;
    bottom: -45%;
    z-index: 80;
`

S.Title = styled.h1`
  font-family: 'bio-sans';
`