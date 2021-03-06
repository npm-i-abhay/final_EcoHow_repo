import React from 'react';
import styled from 'styled-components';
import {ImCross} from 'react-icons/im'

const HintCont = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
height:30%;
width:85%;
background-color:#D7E6DB;
border-radius:20px;
opacity:${props=>props.opacity};
transition:.5s;
position:absolute;
z-index:3;
display:${props => props.hintDisplay};
left:${props=>props.left}px;
top:${props=>props.top}em;
// padding:1em;

    .closeIcon
    {   display:flex;
        // position:absolute;
        // justify-self:flex-start;
        justify-content:flex-end;
        font-size:1.5em;
        // border:2px solid red;
        width:100%;
    }
    .hintTexts
    {   display:flex;
        flex-direction:column;
        // margin-bottom:2.5em;
        // border:2px solid red;
        width:90%;
        
    }

`;


const Text1 = styled.span`
font-size:1.5em;
width:80%
font-weight:bold;
font-family: 'Montserrat', sans-serif;
// border:2px solid red;
`


const Text3 = styled.span`
font-family: 'Montserrat', sans-serif;
font-size:0.8em;
// margin-bottom:2.5em;
// border:2px solid red;
width:80%;
`;




const HintCard =({
    hint="That malfunctioning little twerp. This is all his fault! He tricked me into going this way, but he'll do no better. Wait, what's that? A transport! I'm saved! Over here! Help! Please, help! Artoo-Detoo! It's you! It's you!",
    op1=1,
    leftValue=2000,
    top=3.5,
    hintHeader="Help",
    displayHint = "",
    onClick = ()=> {
    }
})=> 
{
        
        return <HintCont 
                opacity={op1} l
                left={leftValue} 
                top={top}
                hintDisplay = {displayHint}>
                
                <div className="hintTexts">
                    
                    <div className="closeIcon">

                    <ImCross onClick = {onClick}>
                    </ImCross>
                    </div>
                    
                    <Text1>
                        {hintHeader}
                    </Text1>
                    <br></br>
                    <Text3>
                        {hint}    
                    </Text3> 
                </div>    
         </HintCont>
}

export default HintCard;