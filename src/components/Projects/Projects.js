import styled, {keyframes} from 'styled-components'
import bg1 from '../__ASSETS__/LundinOptometryDisplay.webp'
import React, { useEffect, useRef, useState } from 'react'

const Projects = () => {
    const projectsRef = useRef()
    const [yScroll, setYScroll] = useState(0)
    const listenToScroll = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop
      
        const height =
          document.documentElement.clientHeight
        
        const scrolled = winScroll / height
        projectsRef.current.style.transform = `translateY(-${(scrolled || 0) * 120}%)`
        console.log(scrolled * 120)
      }
    
    useEffect(()=>{
        window.addEventListener('scroll', listenToScroll)
    })

  return (
    <S.Projects ref={projectsRef}>
        {
            yScroll > -25 ? 
            <S.Project >
                <S.Footer>
                    <S.Title>Lundin Optometry</S.Title>
                    <S.ProjectLinks>
                        <S.Link>live site</S.Link>
                        <S.Link>github</S.Link>
                    </S.ProjectLinks>
                </S.Footer>

                <S.Scroller>
                <S.Background src={bg1} alt='Lundin Optometry Website Screenshot' />
                </S.Scroller>
            </S.Project>
            :
            <></>
        }
        {
            yScroll > -25 ? 
            <S.Project >
                <S.Footer>
                    <S.Title>Lundin Optometry</S.Title>
                    <S.ProjectLinks>
                        <S.Link>live site</S.Link>
                        <S.Link>github</S.Link>
                    </S.ProjectLinks>
                </S.Footer>

                <S.Scroller>
                <S.Background src={bg1} alt='Lundin Optometry Website Screenshot' />
                </S.Scroller>
            </S.Project>
            :
            <></>
        }
        {
            yScroll > -25 ? 
            <S.Project >
                <S.Footer>
                    <S.Title>Lundin Optometry</S.Title>
                    <S.ProjectLinks>
                        <S.Link>live site</S.Link>
                        <S.Link>github</S.Link>
                    </S.ProjectLinks>
                </S.Footer>

                <S.Scroller>
                <S.Background src={bg1} alt='Lundin Optometry Website Screenshot' />
                </S.Scroller>
            </S.Project>
            :
            <></>
        }
        {
            yScroll > -25 ? 
            <S.Project >
                <S.Footer>
                    <S.Title>Lundin Optometry</S.Title>
                    <S.ProjectLinks>
                        <S.Link>live site</S.Link>
                        <S.Link>github</S.Link>
                    </S.ProjectLinks>
                </S.Footer>

                <S.Scroller>
                <S.Background src={bg1} alt='Lundin Optometry Website Screenshot' />
                </S.Scroller>
            </S.Project>
            :
            <></>
        }

        {
            yScroll > -38 ? 
            <S.Project></S.Project>
            :
            <></>
        }

        {
            yScroll > -55 ? 
            <S.Project></S.Project>
            :
            <></>
        }
    </S.Projects>
  )
}

export default Projects

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
const S = {}

S.Projects = styled.div`
    position: relative;
    z-index: 75;
    width: 100%;
    height: 100vh;
    background-color: rgb(40,40,50);
    top: 30%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-gap: 2px;
    align-content: center;
    box-sizing: border-box;
    grid-template-rows: 50% 50%;
    grid-template-columns: 50% 50%;
    @media (max-width: 650px) {

    }
`

S.Project = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    animation: ${fadeIn} 300ms forwards linear;
    display: grid;
    justify-items: center;
    background-size: 100%;
    position: relative;
`

S.Background = styled.img`
    width: 100%;
    
    
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
    box-sizing: border-box;
    position: absolute;
    background-color: rgba(0,0,0,0.5);
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
    align-items: center

`