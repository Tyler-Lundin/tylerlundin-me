import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
const Parallax = (props) => {
    const {speed, bgColor, children} = props

    const parallaxRef = useRef()
    const [yScroll, setYScroll] = useState(0)
    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.clientHeight
        
        const scrolled = winScroll / height
        parallaxRef.current.style.transform = `translateY(-${scrolled * speed || 0}%)`
        // console.log(scrolled * 120)
      }
    
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    })

    return (
        <ParallaxContainer ref={parallaxRef} bgColor={bgColor} >
            {children}
        </ParallaxContainer>
    )
}

export default Parallax

const ParallaxContainer = styled.div`
    width: 100%;
    height: 100%;

`