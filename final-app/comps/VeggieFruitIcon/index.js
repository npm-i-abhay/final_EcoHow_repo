import styled from 'styled-components'
import React from 'react'


const GifContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100px;
height:100px;
background-color:#C5E2E6;
border-radius:50%;
transform: translateY(60px)
`

const ContainerImage = styled.img`
object-fit:cover;
height:85%;
width:85%;
border-radius:50%;
position:relative;

`

const veggieContainer = ({})=>
{
    return      <GifContainer>
                    <ContainerImage src="/broccoli.png" />
                </GifContainer>
        
}       

export default veggieContainer