import styled from 'styled-components'
import React from 'react'

const Icon = (props) => {
  const { icon, label} = props
  return (
    <S.Container>
        <S.Icon>{icon}</S.Icon>
        <S.Label>{label}</S.Label>
    </S.Container>
  )
}

export default Icon

const S = {}

S.Container = styled.div`
    width: fit-content;
    height: fit-content;
    display: grid;
    grid-template-rows: min-content max-content;
    color: black;
    align-items: center;
    justify-items: center;
    transition: 250ms;
    :hover {
        color: red;
        cursor: pointer;
    }
`

S.Label = styled.h2`
    font-family: 'le-havre';
`

S.Icon = styled.div`

`