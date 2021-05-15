import React from 'react';
import styled from 'styled-components';


const HintCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:16.75em;
width: 20em;
background-color:#D7E6DB;
border-radius:12px;
opacity:${props=>props.opacity};
transition:0.2s;
z-index:2;
position:absolute;
left:${props=>props.left}px;
top:${props=>props.top}em;

`;


const Text1 = styled.span`
font-size:2.5em;
width:80%
`


const Text3 = styled.span`
font-size:1em;
width:80%;
`;




const HintCard =({
    hint="That malfunctioning little twerp. This is all his fault! He tricked me into going this way, but he'll do no better. Wait, what's that? A transport! I'm saved! Over here! Help! Please, help! Artoo-Detoo! It's you! It's you!",
    op1=1,
    leftValue=2000,
    top=3.5,
    hintHeader="Help"
})=> 
{
        
        return <HintCont opacity={op1} left={leftValue} top={top}>

    
            <Text1>
                {hintHeader}
            </Text1>
            <br></br>
            <Text3>
            {hint}    
            </Text3> 
         </HintCont>
}

export default HintCard;