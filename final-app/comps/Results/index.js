import React from 'react';
import styled from 'styled-components';

const ResultsCont = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
width:265px;
height:242px;
border-radius:53px;
background-color:#5EBA92;
`;

const ResultsTextCont = styled.div`
display:flex;
justify-items:center;
align-items:center;
width:193px;
height:178px;
border-radius:18px;
background-color:#21AAB5;
`;

const ResultsText = styled.div`
color:white;
font-size:14px;
padding:15px;
text-align:center;
`;



const Results = ({
    text="Abhay sucks Abhay Steve miller Henry Leung The fearless flyers Test",
}) => {

    return <div> 
    <ResultsCont>
        <ResultsTextCont>
            <ResultsText>{text}</ResultsText>
        </ResultsTextCont>
    </ResultsCont>
    </div>
}

export default Results;