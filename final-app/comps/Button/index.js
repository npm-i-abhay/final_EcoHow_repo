import React from 'react';
import styled from 'styled-components';


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
`;
const ButtonCont = styled.span`


`;
//PROPS
const Button = ({
    text="Test Button",
    bgcolor="#F7D488"
}) => {

    return <div> <ButtonCont >
        <ButtonInput backgroundColor={bgcolor}>
            {text}
        </ButtonInput>
    </ButtonCont>
    </div>
}

export default Button;