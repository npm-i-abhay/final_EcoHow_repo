import styled from 'styled-components'
import React from 'react'

const GifContainer = styled.div`
width:70px;
height:70px;
margin:15px;
`

const ContainerImage = styled.img`
object-fit:cover;
height:100%;
width:100%;
position:relative;

`

const StarContainer = ({})=>
{
    return      <GifContainer>
                    <ContainerImage src="/star.png" />
                </GifContainer>
        
}       

export default StarContainer