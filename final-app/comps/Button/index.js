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
 border-radius: 12px;
 border:none;
 margin-left:15px;
 margin-top: 20px;
 filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
 color:white;

`;
const ButtonCont = styled.span`
`;
//PROPS
const Button = ({
    text="Test Button",
    bgcolor="#F7D488",
    
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


