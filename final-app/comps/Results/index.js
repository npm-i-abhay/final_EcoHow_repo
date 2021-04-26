import React from 'react';
import styled from 'styled-components';

const ResultsCont = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:80%;
height:100%;
margin:2em;
position:relative;
border-radius:53px;
background-color:#5EBA92;
`;

const ResultsTextCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:14px;
padding:15px;
text-align:center;
width:90%;
height:90%;
font-size:1.3em;
position:relative;
border-radius:25px;
background-color:#21AAB5;
`;





const Results = ({
    text="Abhay sucks Abhay Steve miller Henry Leung The fearless flyers Test",
}) => {

    return (
    <ResultsCont>
        <ResultsTextCont>
            {text}
            {/* <ResultsText>{text}</ResultsText> */}
        </ResultsTextCont>
    </ResultsCont>
    )
}

export default Results;