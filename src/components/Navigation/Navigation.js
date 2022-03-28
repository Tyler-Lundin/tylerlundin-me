import styled from 'styled-components'

import React from 'react'

const Navigation = () => {
  return (
    <S.Navigation>
        <S.ul>
            <S.li>projects      <S.Marker/></S.li>
            <S.li>about         <S.Marker/></S.li>
            <S.li>education     <S.Marker/></S.li>
            <S.li>experience    <S.Marker/></S.li>
        </S.ul>
    </S.Navigation>
  )
}

export default Navigation

const S = {}

S.Navigation = styled.div`
    width: 100%;
    height: 80%;
    display: grid;
    justify-items: center;
    align-items: center;
`

S.ul = styled.ul`
    list-style: none;
    width: 25%;
    display: grid;
    grid-gap: 15px;
`

S.li = styled.li`
    width: 100%;
    font-family: 'bio-sans';
    color: white;
    display: grid;
    grid-template-columns: min-content 2fr;
    align-items: center;
    transition: 250ms;
    :hover {
        color: gold;
    }
    :hover > div {
        background: gold;
    }
`

S.Marker = styled.div`
    width: 70%;
    height: .2rem;
    background: white;
    border-radius: 10px;
    justify-self: right;
    transition: 250ms;

`