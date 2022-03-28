import styled from 'styled-components'
import video from '../__ASSETS__/RotoSmall_2.mp4'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMessage } from 'react-icons/ai'
import Icon from '../Icon/Icon'
import arrow from '../__ASSETS__/arrow-sketch.png'
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (

    <>
      <S.Hero>
        <S.Cta>
          CHECK OUT MY PROJECTS
          <img src={arrow} alt='arrow'/>
        </S.Cta>

        <S.VideoContainer>
          <S.Video autoPlay muted loop={true}>
            <source src={video} />
          </S.Video>
        </S.VideoContainer>

        <S.Title>
          I'm Tyler Lundin
          <br />
          <Typewriter onInit={(typewriter) => {
            typewriter
            .typeString('Web Developer')
            .pauseFor(2500)
            .deleteAll()
              .typeString('Web Designer')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Web Gym Bro')
              .pauseFor(2500)
              .deleteAll()
              .typeString('Web Developer')
              .pauseFor(2500)
              .start();
            }}
            />
        </S.Title>

        <S.SocialLinks>
          <Icon icon={<AiFillGithub size='20px' />} label='github' />
          <Icon icon={<AiFillLinkedin size='20px' />} label='linkedin' />
          <Icon icon={<AiFillInstagram size='20px' />} label='instagram' />
          <Icon icon={<AiFillMessage size='20px' />} label='contact me' />
        </S.SocialLinks>
      </S.Hero>
    </>
  )
}

export default Hero

const S = {}

S.Hero = styled.div`
  height: fit-content;
  width: 100%;
  align-self: start;
  display: grid;
  grid-gap: 7vh;
  box-sizing: border-box;
  justify-items: center;
  align-items: center;
  align-content: center;
  padding: 30px;
  position: relative;
  z-index: 50;


`

S.VideoContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100%;
  overflow: hidden;
`
S.Video = styled.video`
  width: 100%;
  transform: translateY(-15%);
`
S.Title = styled.h1`
  color: black;
  font-size: 2rem;
  text-align: center;
  font-family: 'bio-sans';
`
S.Bottom = styled.div`
  width: 100%;
  height: 100%;
  grid-column: 1 / 3;
  grid-row: 3 / 4;
  display: grid;
  grid-template-rows:1fr 60px;
`
S.SocialLinks = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
`

S.Cta = styled.div`
  width: 200px;
  height: 150px;
  position: absolute;
  bottom: -30%;
  left: 10%;
  font-family: 'swing-king';
  color: black;
  font-size: 1rem;
  display: grid;
  justify-items: center;
  img {
    width: 30%;
    transform: translateX(-100%) rotate(90deg);
  }
`