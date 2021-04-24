import React, {useState} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import MyHint from '../Hints';



const Wrapper = styled.div`
position:relative;
`;



const IconContainer = styled.button `
height:2.125em;
width:2.125em;
border-radius:1.5em;
background-color:#F7D488;
display:flex;
margin:10px;
border:none;
justify-content:center;
align-items:center;
font-size:1.2em;
`;

const IconText = styled.span`
font-size:2em;
`;




const MakeHelp = ({

    text= '\u21FD',
    hintChain2 = "whatever whatever sometimes Coding is  pain but I like using the rusted gears in my brain"
    
})=>
{   
    var helpFadeIn = 0
    var leftIn = -100
    const[help, setHelp] = useState(false)
 
        if (help)
        {
            helpFadeIn=1
            leftIn = 30
        }
 
    return <Wrapper> 
    <IconContainer onClick={()=>setHelp(!help)}> 
    
        <IconText> 
            {text}
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