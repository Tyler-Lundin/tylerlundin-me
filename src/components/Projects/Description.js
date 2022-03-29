import styled, {keyframes} from 'styled-components'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIsOpen, setOpenProject } from '../../app/state/projectSlice'

const Description = (props) => {

    const { descTitle, desc, linkLiveSite, linkGithub, index } = props
    const dispatch = useDispatch()
    const openProjects = useSelector(state => state.project.value.openProjects)
    const isOpen = useSelector(state => state.project.value.isOpen)
    const [bypass, setBypass] = useState(false)


    const isProjectOpen = openProjects.includes(index)

    const handleOpen = () => {
        if (openProjects.includes(index)) {
            const myIndex = openProjects.indexOf(index);
            const newOpenProjects = [...openProjects]
            newOpenProjects.splice(myIndex)
            dispatch(setOpenProject(newOpenProjects))
        } else {
            dispatch(setOpenProject([index , ...openProjects]))
        }
        dispatch(setIsOpen(!isOpen))
        

    }


  return (
    <S.Description>
        <S.Drawer isOpen={isProjectOpen}>
            <S.DescTitle>{descTitle}</S.DescTitle>
            <S.Desc>
                {desc}
            </S.Desc>  
            <S.Links>
                <S.Item>
                    <S.Link href='#'>View Live Website</S.Link>
                </S.Item>
                <S.Item>
                    <S.Link href='#'>View Github Repo</S.Link>
                </S.Item>
            </S.Links>
            <S.OpenBtn onClick={handleOpen} isOpen={isProjectOpen}>
                {isProjectOpen ? 'Close' : 'View'} Project {isProjectOpen ? <AiOutlineArrowUp/> : <AiOutlineArrowDown /> }
            </S.OpenBtn>
        </S.Drawer>
    </S.Description>
  )
}

export default Description

const A = {}

A.SlideOut = (isReversed) => keyframes`
    from {
        transform: translateY(${!isReversed ? '0%' : '-100%'});
    }
    to {
        transform: translateY(${!isReversed ? '-100%' : '0%'});
    }
`

const S = {}

S.Description = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -100%;
    display: grid;
    justify-items: center;
    /* background-color: rgba(255,0,0,0.5); */
    overflow: hidden;
`

S.Drawer = styled.div`
    width: 100%;
    height: 85%;
    position: relative;
    background-color: rgba(255,255,255,0.5);
    animation: ${props=>A.SlideOut(props.isOpen)} forwards 250ms ease-in-out;
    padding: 10px ;
    box-sizing: border-box;
    font-family: 'bio-sans';
    text-align: center;
    display: grid;
`

S.OpenBtn = styled.h3`
    width: fit-content;
    height: 100%;
    font-family: 'bio-sans';
    position: absolute;
    bottom: -100%;
    left: 50%;
    transform: translateX(-50%);
`

S.DescTitle = styled.h3`

`

S.Desc = styled.p`
`

S.DescFooter = styled.p`

`

S.Links = styled.ul`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    list-style: none;
`

S.Item = styled.li`

`

S.Link = styled.a`
    color: red;
`