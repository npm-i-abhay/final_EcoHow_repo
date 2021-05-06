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
border: 5px solid #21AAB5;
filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
background-color:#F5F1ED;
display:flex;
margin:10px;
justify-content:center;
align-items:center;
font-size:1.2em;
animation: shake 0.5s;
  animation-iteration-count: ${props=>props.count};
}

// @keyframes shake {
//   0% { transform: translate(1px, 1px) rotate(0deg); }

//   100% { transform: translate(1px, -2px) rotate(-1deg); }
// }
`;

const IconText = styled.span`
font-size:1.5em;
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
    const [animationCount, setAnimationCount] = useState("infinite");
 
        if (IconContainer.onClick){
            setAnimationCount("0")
        }


        if (help)
        {
            helpFadeIn=1
            leftIn = 30
        }
 
    return <Wrapper> 
    <IconContainer onClick={()=>setHelp(!help)} count={animationCount}> 
    
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