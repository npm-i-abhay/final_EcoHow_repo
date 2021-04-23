import React from 'react';
import styled from 'styled-components';


const HintCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
height:16.75em;
width: 20em;
background-color:#F7D488;
border-radius:12px;
opacity:${props=>props.opacity};
transition:0.2s;
z-index:2;
position:absolute;
left:2em;
top:3.5em;

`;

const HintBanner = styled.div`
height:5em;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
`;
const Text1 = styled.span`
font-size:2.5em;
margin:0.5em;
`
const Text2 = styled.span`
margin:0.5em;
font-size 3.5em
`

const Text3 = styled.span`
font-size:1em;
width:80%;
margin:0.5em;
`;




const HintCard =({
    hint="That malfunctioning little twerp. This is all his fault! He tricked me into going this way, but he'll do no better. Wait, what's that? A transport! I'm saved! Over here! Help! Please, help! Artoo-Detoo! It's you! It's you!",
    op1=1,
    

})=> 
{
        
        return <HintCont opacity={op1}>

        <HintBanner>
            <Text1>
                Help
            </Text1>
            
            <Text2>
            &#10006;
            </Text2>
            </HintBanner>
        
            <Text3>
            {hint}    

            </Text3> 
         </HintCont>
}

export default HintCard;