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
import Menu from '../../comps/Menu'
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
    routeToChain2= ""
})
{   
    const router = useRouter()
    const {quiz} = router.query

    if (quiz === "question-one-inorg")
    {
        questionChain = "Which Ones of the following should not be recycled"
        routeToChain2= "/tips/inorganicbad"
        onClickChain = ()=> router.push("/quiz/question-two-inorg")
    }
    if (quiz === "question-two-inorg")
    {
        questionChain = "Which Ones of the following"
        routeToChain2= "/quiz/question-one-inorg"
        onClickChain = ()=> router.push("/quiz/question-three-inorg")
    }
    if (quiz === "question-three-inorg")
    {
        questionChain = "Which Ones of"
        routeToChain2= "/quiz/question-two-inorg"
        onClickChain = ()=> router.push("/results")
    }
// ====================================================

if (quiz === "question-one-org")
    {
        questionChain = "What kind of chemical elements  can generate a healthy compost?"
        routeToChain2= "/tips/organicbad"
        onClickChain = ()=> router.push("/quiz/question-two-org")
    }
    if (quiz === "question-two-org")
    {
        questionChain = "What happens if you add fresh citrus to your compost?"
        routeToChain2= "question-one-org"
        onClickChain = ()=> router.push("/quiz/question-three-org")
    }
    if (quiz === "question-three-org")
    {
        questionChain = "Is it okay to add meat scraps to your compost?"
        routeToChain2= "/quiz/question-two-org"
        onClickChain = ()=> router.push("/results")
    }





    return <QuizCont >
       
       <Head>
        <title> Quiz page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    

                    <Menu routeToChain = {routeToChain2} />
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


