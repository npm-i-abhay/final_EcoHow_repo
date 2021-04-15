import React from 'react';
import styled from 'styled-components';

const HintCont = styled.div`
height:14.75em;
width: 20em;
background-color:#F7D488;


`;

const HintBanner = styled.div`
height:2em;
display:flex;
justify-content:space-around;
`;
const Text1 = styled.span`
font-size:2.5em;
margin-left:-1em;
`
const Text2 = styled.span`
margin-right:-1em;
font-size 3.5em
`

const HintCard =({})=> 
{
    return <HintCont>

        <HintBanner>
            <Text1>
                Hint
            </Text1>
            
            <Text2>
            &#10006;
            </Text2>
                

            </HintBanner>
        
         </HintCont>
}

export default HintCard;