import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import {GiMoon} from 'react-icons/gi'


const Wrapper = styled.div``

const IconContainer = styled.div `
display:flex;
margin:12px;
justify-content:center;
align-items:center;
cursor:pointer;
opacity:${props => props.toggleDarkDisplay};
`;


const IconText = styled.span`
font-size:2.2em;
transition: all 1s;
color:${props=> props.iconDarkColor};
font-family: 'Spartan', sans-serif;
`;

const DarkIcon = ({
    
    darkDisplayToggle="1",
    darkIconColor = "#21AAB5",
    onClick = ()=> {}
})=>
{   const router = useRouter();
    return <Wrapper> 
        <IconContainer onClick={onClick} toggleDarkDisplay = {darkDisplayToggle}> 
    
      
        <IconText iconDarkColor= {darkIconColor} > 
            <GiMoon/>
        </IconText>


    </IconContainer>
    </Wrapper> 
}

export default DarkIcon;