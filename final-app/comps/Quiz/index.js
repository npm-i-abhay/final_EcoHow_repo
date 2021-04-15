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





const QuizQuestions = ({
    answer1="chicken",
    answer2="egg",
    answer3="Henry",
    question="What came first the chicken or the egg?"
}) => {

    return <div> 
        <QuestionCont>
            <QuestionText>{question}</QuestionText>
        </QuestionCont>
        <br></br>

<input type="radio" id="male" name="gender" value="male"/>
  <label for="male">{answer1}</label>
  <br></br>
  <br></br>
  <input type="radio" id="female" name="gender" value="female"/>
  <label for="female">{answer2}</label>
  <br></br>
  <br></br>
  <input type="radio" id="other" name="gender" value="other"/>
  <label for="other">{answer3}</label>
    </div>
}

export default QuizQuestions;