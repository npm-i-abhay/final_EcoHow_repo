import React from 'react';
import styled from 'styled-components';

const GifContainer = styled.div`
width:100%;
height:100%;
margin-top:.5em;
// border:10px solid black;
// border-radius:50px;
`

const ContainerImage = styled.img`
object-fit:contain;
height:100%;
width:100%;
border-radius:${props => props.radius};
position:relative;

`

const HeroContainer = ({
    borderRadius="50px",
    source = "/team4.gif"
})=>
{
    return  <GifContainer>
                <ContainerImage src={source}
                radius={borderRadius} />
            </GifContainer>
}

export default HeroContainer