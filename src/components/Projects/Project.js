import styled, {keyframes} from 'styled-components'
import React, {useRef, useState, useEffect} from 'react'

const Project = (props) => {

    // const projectsRef = useRef()
    // const [yScroll, setYScroll] = useState(0)
    // const listenToScroll = () => {
    //     const winScroll =
    //         document.body.scrollTop || document.documentElement.scrollTop
        
    //     const height =
    //         document.documentElement.clientHeight
        
    //     const scrolled = winScroll / height
    //     projectsRef.current.style.transform = `translateY(-${(scrolled || 0) * 120}%)`
    //     console.log(scrolled * 120)
    //     }

    // useEffect(()=>{
    //     window.addEventListener('scroll', listenToScroll)
    // })

  return (
    <S.Project bgColor={props.bgColor} style={{zIndex: 10 - props.index}}>
                <S.Scroller>
                    <S.Background src={props.thumbnail} alt={props.alt} />
                </S.Scroller>
                {props.children}
    </S.Project>
  )
}

export default Project



// animations

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50%);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`



// style

const S = {}
//bgColor prop V V V
S.Project = styled.div`
    width: 400px;
    height: 225px;
    animation: ${fadeIn} 300ms forwards linear;
    display: grid;
    /* grid-template-rows: 1.5fr 1fr; */
    justify-items: center;
    background-size: 100%;
    position: relative;
    background-color: rgba(255,255,255,0.5); 
    box-sizing: border-box;
    padding: 15px;
    grid-gap: 10px;
`

S.Background = styled.img`
    width: 100%;
    
`
S.Header = styled.div`
    display: grid;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
`
S.Scroller = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: auto;
`

S.Footer = styled.div`
    display: grid;
    grid-auto-flow: column;
    width: 100%;
    height: 35%;
    box-sizing: border-box;
    bottom: 0;
    color: white;
`
S.Title = styled.h3`
    font-family: 'bio-sans';
    text-align: center;
`
S.Link = styled.h4`
    font-family: 'bio-sans';
`

S.ProjectLinks = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
`

S.Desc = styled.p`
    height: fit-content;
`