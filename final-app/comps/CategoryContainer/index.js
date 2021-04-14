import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
height:10em;
width: 15em;
background-color:#21AAB5;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:flex-end;

`;

const DropDown = styled.div`
height:1.5em;
width:12em;
background-color:#5EBA92;
// margin-top:2em;
text-align:center;
color:white;
`;

const SliderCont = styled.div`
display:flex;
align-items:center;
`;

const SliderIcon = styled.div`
height:2.5em;
width:2.5em;
margin-right:-1em;
z-index:1;
text-align:center;
border-radius:1.5em;
background-color:#F7D488;

`;

const SliderImg = styled.img`
width: 2.5em;
height:2.5em;
object:contain;
// z-index:2em;

`
const Slider = styled.div`
height:1.5em;
width:10em;
margin-right:2em;
background-color:#C5E2E6;
text-align:right;
`;
const AnimContainer = (
    {
        text = "vegetables or whatever",
        bgColor= "#AFCF68",
        TxtAlign = "center"
    })=>


{
    return <Container> 
        
        <DropDown> 
        {text} 
        </DropDown>

        <SliderCont>
            
            <SliderIcon>
                
            <SliderImg  src="/vercel.svg" />
            </SliderIcon>
                
                <Slider> 
                    Slide to Learn more
                </Slider>
        </SliderCont>
    </Container>

}

export default AnimContainer