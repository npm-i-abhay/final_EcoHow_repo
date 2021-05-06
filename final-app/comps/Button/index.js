import React from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';



// const ButtonImg = styled.img`
// width:20px;
// height:auto;
// object-fit:contain;
// `;


const ButtonInput = styled.button`
 background-color:${props=>props.backgroundColor};
 color:black;
 padding:15px;
 width:100%;
 border-radius: 6px;
 border:none;
 margin-left:15px;
 font-family: 'Montserrat', sans-serif;
 margin-top: 20px;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 color:white;
 

`;
const ButtonCont = styled.div`
// border:2px solid red;
width:8em;
`;
//PROPS
const Button = ({
    text="Test Button",
    bgcolor="#F7D488",
    
    onClick = ()=> {}
}) => {
    const router = useRouter();
    return <ButtonCont onClick={onClick}>
        <ButtonInput backgroundColor={bgcolor}>
            {text}
        </ButtonInput>
    </ButtonCont>

}

export default Button;


