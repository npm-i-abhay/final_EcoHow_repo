import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {MdKeyboardBackspace} from 'react-icons/md'
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
`;

const IconText = styled.span`
font-size:2em;
color:#21AAB5;
`;

const MakeIcon = ({
    
    text= '\u21FD',
    routeTo=""
})=>
{   const router = useRouter();
    return <IconContainer onClick={()=>router.push(routeTo)}> 
    
        <IconText> 
      
      <MdKeyboardBackspace/>
        </IconText>


    </IconContainer>
}

export default MakeIcon;