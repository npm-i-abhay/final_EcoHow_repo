import styled from 'styled-components'
import React from 'react'







const GifContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:310px;
height:380px;
background-color:#21AAB5;
border-radius:40px;
`

const ContainerImage = styled.img`
object-fit:cover;
height:85%;
width:85%;
border-radius:40px;
position:relative;

`

const PlantContainer = ({})=>
{
    return      <GifContainer>
                    <ContainerImage src="/happyPlant.gif" />
                </GifContainer>
        
}       

export default PlantContainer