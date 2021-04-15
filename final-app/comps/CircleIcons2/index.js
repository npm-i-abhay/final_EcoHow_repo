import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';

const IconContainer = styled.div `
height:3.125em;
width:3.125em;
border-radius:1.5em;
background-color:#21AAB5;
display:flex;
margin:10px;
justify-content:center;
align-items:center;
font-size:1.2em;
`;

const IconText = styled.span`
font-size:2em;
color:white;
transform: scaleX(-1);
`;

const MakeIcon = ({
    
    routeTo="/quiz",
    text= '\u21FD',

})=>
{
    const router = useRouter();
    return <IconContainer  onClick={()=>router.push(routeTo)} > 
    
        <IconText> 
      {text}
        </IconText>


    </IconContainer>
}

export default MakeIcon;