import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
import MakeIcon from '../../comps/CircleIcons'
import MyHeader from '../../comps/RecycleInfo'
import MyAnswers from '../../comps/Quiz'
import MyButton from '../../comps/Button'
import MyCircle from '../../comps/CircleIcons2'
import styled from 'styled-components'
import {useRouter} from 'next/router'


const QuizCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    background-color:#376293;

        .iconHeader
        {
            width:100%;
            display:flex;
            justify-content:space-between;
        } 
        
        .banner
        {
            width: 100%;
            height:125px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }

        .answersCont{
            display:flex;
            flex-direction:column
            height:50%;
            width:100%;
            background-color:#376293;
            justify-content:center;
            margin-bottom:50px;
        }

        .buttonCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color:#376293; 
            justify-content:space-between;
            margin-bottom:10px;
        }

        .toggleCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color#376293; 
            justify-content:center;
        }


}


`

export default function Quiz ({
    screenHeight= 620,
    questionChain = "",
    onClickChain = ()=>{},
    routeToChain= ""
})
{   
    const router = useRouter()
    const {quiz} = router.query

    if (quiz === "question-one")
    {
        questionChain = "Which Ones of the following should not be recycled"
        routeToChain= "/tips/inorganicbad"
        onClickChain = ()=> router.push("/quiz/question-two")
    }
    if (quiz === "question-two")
    {
        questionChain = "Which Ones of the following"
        routeToChain= "/quiz/question-one"
        onClickChain = ()=> router.push("/quiz/question-three")
    }
    if (quiz === "question-three")
    {
        questionChain = "Which Ones of"
        routeToChain= "/quiz/question-two"
        onClickChain = ()=> router.push("/results")
    }

    return <QuizCont >
       
       <Head>
        <title> Quiz page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    <MakeIcon routeTo={routeToChain}/>
                    <MakeIcon text="?"/>
                    </div>  
                <div className="banner">
                    <MyBanner text="Test Your Knowledge" bgColor="#F5F1ED"/>   
                </div>
                <div className="answersCont">
                    <MyAnswers
                    question= {questionChain}/>
                </div>

                <div className="buttonCont">
                    <MyButton text="hint"/>
                    <MyButton text="next Question" onClick={onClickChain}/>
                </div>

                <div className="toggleCont">
                    toggles go here
                </div>
                

        </div>
        </QuizCont>
}


