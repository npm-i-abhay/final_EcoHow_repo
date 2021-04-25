import React from 'react';
import styled from 'styled-components';
import MyHint from '../Hints';

const QuizCont = styled.div`
// display:flex;
// width:80%;
// flex-direction:column;
`;

const QuestionCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
background-color:#F5F1ED;
height: 58px;
width: 392px;
border-radius: 16px;
padding:1.5em;
`;



const RadioComp = ({
	onClick=()=>{},	
    question="What came first the chicken or the egg?",
    label1="",
    label2="",
    label3=""
}) =>{

	return <QuizCont>
		
        <QuestionCont>
        {question}
        </QuestionCont>
        
        <br></br>
        <br></br>
        
        <input type="radio" id="male" name="gender" value="male" onClick={onClick} />
		<label for="male">{label1}</label>
        <br></br>
        <br></br>
		<input type="radio" id="female" name="gender" value="female" onClick={onClick} />
		<label for="female">{label2}</label>
        <br></br>
        <br></br>
		<input type="radio" id="other" name="gender" value="other"onClick={onClick} />
		<label for="other">{label3}</label>
	</QuizCont>
}

export default RadioComp;
