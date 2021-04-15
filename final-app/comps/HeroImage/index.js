import React from 'react';
import styled from 'styled-components';

const GifContainer = styled.div`
width:304px;
height:316px;
// border:10px solid black;
// border-radius:50px;
`

const ContainerImage = styled.img`
object-fit:cover;
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