import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {MdKeyboardBackspace} from 'react-icons/md'
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

const MakeIcon = ({
    
    text= '\u21FD',
    routeTo= window.history.back()
})=>
{   const router = useRouter();
    return <IconContainer onClick={()=>router.push(routeTo)}> 
    
        <IconText> 
      
      <MdKeyboardBackspace/>
        </IconText>


    </IconContainer>
}

export default MakeIcon;