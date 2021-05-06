import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import MyHint from '../Hints';
import {IoHelpCircleOutline} from 'react-icons/io5'


const Wrapper = styled.div`
// position:relative;
`;



const IconContainer = styled.div`
// filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.7));
display:flex;
margin:7.9px;
justify-content:center;
align-items:center;

`;

const IconText = styled.span`
font-size:2.7em;
color:#21aab5;
font-family: 'Spartan', sans-serif;
`;




const MakeHelp = ({

    text= '\u21FD',
    hintChain2 = "whatever whatever sometimes Coding is  pain but I like using the rusted gears in my brain"
    
})=>
{   
    var helpFadeIn = 0
    var leftIn = -500
    const[help, setHelp] = useState(false)
 
        if (help)
        {
            helpFadeIn=1
            leftIn = 30
        }
 
    return <Wrapper> 
    <IconContainer onClick={()=>setHelp(!help)}> 
    
        <IconText> 
            <IoHelpCircleOutline/>
        </IconText>

        
    </IconContainer>
    
    <MyHint 
    op1={helpFadeIn}
    hint={hintChain2}
    leftValue={leftIn}
    />
    </Wrapper>
}

export default MakeHelp;