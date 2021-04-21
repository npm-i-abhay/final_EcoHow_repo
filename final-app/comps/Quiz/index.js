import React from 'react';
import styled from 'styled-components';


const QuestionCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color: #F5F1ED;
width:292px;
height:58px;
border-radius:16px;
`;


const QuestionText = styled.div`
font-size:16px;
padding:20px;
`;

const MainRadio = styled.input.attrs(props => ({type:"radio"})) `

`




const QuizQuestions = ({
    question="What came first the chicken or the egg?"
}) => {

    return <div> 
        <QuestionCont>
            <QuestionText>{question}</QuestionText>
        </QuestionCont>
        <br></br>
        <br></br>
        <MainRadio/>
        <br></br>
        <br></br>
        <MainRadio/>
        <br></br>
        <br></br>
        <MainRadio/>
</div>
}

export default QuizQuestions;
