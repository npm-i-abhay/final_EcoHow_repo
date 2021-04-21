import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';



const ButtonImg = styled.img`
width:20px;
height:auto;
object-fit:contain;
`;


const ButtonInput = styled.button`
 background-color:${props=>props.backgroundColor};
 color:black;
 padding:15px;
 border-radius: 12px;
 border:none;
 margin-left:15px;
 margin-top: 20px;
`;
const ButtonCont = styled.span`
`;
//PROPS
const Button = ({
    text="Test Button",
    bgcolor="#F7D488",
    routeTo="/tips", 
    onClick = ()=> {}
}) => {
    const router = useRouter();
    return <div> <ButtonCont onClick={onClick}>
        <ButtonInput backgroundColor={bgcolor}>
            {text}
        </ButtonInput>
    </ButtonCont>
    </div>
}

export default Button;