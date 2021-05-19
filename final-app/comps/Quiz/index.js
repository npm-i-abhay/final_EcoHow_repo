import React from 'react';
import styled from 'styled-components';

import MyHint from '../Hints';

const QuizCont = styled.div`
display:flex;
width:100%;
height:100%;
// border:2px solid red;
align-items:center;
flex-direction:column;

  .quizOptions
  {
    // border:2px solid blue;
    width:100%;

      .flex-container
      {
        display:flex;
        width:100%;
        padding:1.5em;
        // border: 2px solid green;
        justify-content:flex-start;
        align-items:center;

        .labelText
        {
         margin-left:2em;
         width:80%;
        //  text-shadow:0px 5px 7px grey;
         font-size:1.5em;
         transition:all 1s;
         color:${props=> props.colLabel};
         font-family: 'Montserrat', sans-serif;
         font-weight:thin;
        }
      }
  }

`;





const QuestionCont = styled.div`
display:flex;
justify-content:center;
align-items:center;
height: 58px;
width: 100%;
font-size:1.5em;
border-radius: 16px;
margin-bottom:3em;
color:${props=> props.colLabel};
transition:all 1s;
padding:1.5em;
text-align:center;
font-family: 'Montserrat', sans-serif;
`;

const RadioCont = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  
  
  &::before {
    content: '';
    border-radius: 100%;
    border: 1px solid black;
    background:#E5E5E5;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    pointer-events: none;
    z-index: 0;
   
  }

        .radioInput
        {
            opacity: 0;
            z-index: 2;
            position: absolute;
            width: 100%;
            height: 100%;
            margin: 0;
            cursor: pointer;
            
            &:focus {
                outline: none;
                
              }
        }

        .radioFill {
            background:${props => props.colorFill};
            width: 0;
            height: 0;
            border-radius: 100%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.2s ease-in, height 0.2s ease-in;
            pointer-events: none;
            z-index: 1;
            box-shadow:0px 3px 3px black;
          }
          
          .radioInput:checked ~ .radioFill {
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            transition: width 0.2s ease-out, height 0.2s ease-out;
          }

`




const RadioComp = ({
	onClick=()=>{},	
    question="What came first the chicken or the egg?",
    label1="",
    label2="",
    label3="",
    fillColor="#71C4CA",
    labelCol = "black"
}) =>{

	return <QuizCont colLabel = {labelCol} >
		
        <QuestionCont
        colLabel = {labelCol} >
        {question}
        </QuestionCont>
        
        <br></br>
        <br></br>

        <div className= "quizOptions">

              <div className ="flex-container">
                
                <RadioCont colorFill={fillColor}>
                    <input 
                    type="radio"
                    id="male" 
                    className = "radioInput"
                    name="gender" 
                    value="male" 
                    onClick={onClick} />
                    
                    <div className="radioFill"> </div>
                
                </RadioCont>
                    
                    <label className="labelText" for="male">{label1}</label> 
              
              </div>
              
              <br></br>
              <br></br>
              
              <div className ="flex-container">
                  
                  <RadioCont colorFill={fillColor}>
                    
                      <input 
                      type="radio"
                      id="female" 
                      className = "radioInput"
                      name="gender" 
                      value="female" 
                      onClick={onClick} />
                  
                      <div className="radioFill"> </div>
                  
                  </RadioCont>
                  <label  className="labelText" for="female">{label2}</label> 
              </div>

              <br></br>
              <br></br>
              <div className ="flex-container">
                  <RadioCont colorFill={fillColor}>
                      <input 
                        type="radio"
                        id="male" 
                        className = "radioInput"
                        name="gender" 
                        value="other" 
                        onClick={onClick} />
                      
                      <div className="radioFill"> </div>
                  
                  </RadioCont>
                  <label  className="labelText" for="other"  >{label3}</label> 
              
                
            </div>  
        
        </div>    


	</QuizCont>
}

export default RadioComp;
