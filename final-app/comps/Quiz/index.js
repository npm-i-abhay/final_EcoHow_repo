import React from 'react';
import { MdEdit } from 'react-icons/md';
import styled from 'styled-components';


const QuizCont = styled.div`
`;





const RadioComp = ({
	onClick=()=>{}	//past the radio button value back out
}) =>{
	
	//w3 radio example, pass the click handler back out
	return <QuizCont>
		<input type="radio" id="male" name="gender" value="male" onClick={onClick} />
		<label for="male">Male</label>
		<input type="radio" id="female" name="gender" value="female" onClick={onClick} />
		<label for="female">Female</label>
		<input type="radio" id="other" name="gender" value="other"onClick={onClick} />
		<label for="other">Other</label>
	</QuizCont>
}

export default RadioComp;
