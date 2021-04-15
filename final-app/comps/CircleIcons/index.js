import React from 'react';
import styled from 'styled-components';

const IconConatiner = styled.div `
height:2.125em;
width:2.125em;
border-radius:1.5em;
background-color:#F7D488;
display:flex;
justify-content:center;
align-items:center;
font-size:1.2em;
`;

const IconText = styled.span`
font-size:2em;
`;

const MakeIcon = ({
    
    text= '\u21FD',

})=>
{
    return <IconConatiner> 
    
        <IconText> 
      {text}
        </IconText>


    </IconConatiner>
}

export default MakeIcon;