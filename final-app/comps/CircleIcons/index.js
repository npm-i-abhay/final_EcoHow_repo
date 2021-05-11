import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {MdKeyboardBackspace} from 'react-icons/md'
import {IoArrowBackCircleOutline} from 'react-icons/io5'

const Wrapper = styled.div``

const IconContainer = styled.div `
// filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
display:flex;
margin:10px;
justify-content:center;
align-items:center;`;

const IconText = styled.span`
font-size:2.5em;
color:#21AAB5;
font-family: 'Spartan', sans-serif;
`;

const MakeIcon = ({
    
    text= '\u21FD',
    routeTo=""
})=>
{   const router = useRouter();
    return <Wrapper> <IconContainer onClick={()=>router.push(routeTo)}> 
    
      
        <IconText> 
      <IoArrowBackCircleOutline/>
        </IconText>


    </IconContainer>
    </Wrapper> 
}

export default MakeIcon;