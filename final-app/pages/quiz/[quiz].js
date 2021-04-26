import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
import MakeIcon from '../../comps/CircleIcons'
import MyHeader from '../../comps/RecycleInfo'
import RadioComp from '../../comps/Quiz'
import MyButton from '../../comps/Button'
import MyCircle from '../../comps/CircleIcons2'
import styled from 'styled-components'
import Menu from '../../comps/Menu'
import {useRouter} from 'next/router'
import {useState} from 'react'
import MyHint from '../../comps/Hints';

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
    questionChain = "test",
    onClickChain = ()=>{},
    routeToChain2= "",
    q1="test",
    q2="test",
    q3="test",
    buttonText="Next Question",
    hintText="blarg",
    hintHeaderText="Hint"
})
{   
    const router = useRouter()
    const {quiz} = router.query

    if (quiz === "question-one-org")
    {
    questionChain = "What kind of chemical elements  can generate a healthy compost?",
    routeToChain2= "/tips/organicbad"
    q1="Nitrogen and Carbon"
    q2="Hydrogen and Nitrogen"
    q3="Oxygen and carbon"
    hintText="One element creates energy and the other breaks organic matter."
    }


      if (quiz === "question-two-org")
    {
        questionChain = "What happens if you add fresh citrus to your compost?"
        routeToChain2= "question-one-org"
        q1="Nothing, its perfectly fine to add to your compost"
        q2="It speeds up the decomposition rate"
        q3="It may kill the kill worms, and the microorganisms"
        hintText="Citrus is very acidic and takes a very long time to decompose."
    }

    if (quiz === "question-three-org")
    {
        questionChain = "Is it okay to add meat scraps to your compost?"
        routeToChain2= "/quiz/question-two-org"
        q1="Yes, worms need protein too"
        q2="No, the meat could be spoiled "
        q3="Yes,  but only bones, they add calcium to your pile."
        buttonText="See Results"
        hintText="Do we want rodents and pests in our compost?"
        
    }
    
    if (quiz === "question-one-inorg")
    {
        questionChain = "Which ones of the following should not be recycled?  "
        routeToChain2= "/tips/inorganicbad"
        q1="Glass bottles"
        q2="Plastic Bags"
        q3="Aluminium can"
        hintText="Remember, the blue bin is where we place all our recylable items. "
    }
    if (quiz === "question-two-inorg")
    {
        questionChain = "Which of the following can minimize electronic waste?"
        routeToChain2= "/quiz/question-one-inorg"
        q1="Planning and researching carefully aproduct before purchasing  "
        q2="Recyling your electronic waste"
        q3="Encouraging others to get a newest and latest models available"
        hintText="Our priority is to reduce waste, which of the following actions will help us do that"
    }
    if (quiz === "question-three-inorg")
    {
        questionChain = "Which of the following is correct about Polystyrene?"
        routeToChain2= "/quiz/question-two-inorg"
        buttonText="See Results"
        q1="It is a material that can be found in Aluminum"
        q2="It causes the final product to be non-degradable"
        q3="This polymer is not a widely used material used today"
        hintText="Remember, three  products mentioned previously have traces of this polymer "
    }





    const handleResult = ()=>
     {

    if (quiz === "question-one-inorg" && radioVal == "female")
    {
     
        routeToChain2= "/tips/inorganicbad"
        setRadioVal(()=> router.push("/quiz/question-two-inorg"))
    }
    if (quiz === "question-two-inorg" && radioVal == "male")
    {
       
        routeToChain2= "/quiz/question-one-inorg"
        setRadioVal(()=> router.push("/quiz/question-three-inorg"))
    }
    if (quiz === "question-three-inorg" && radioVal == "female")
    {
       
        routeToChain2= "/quiz/question-two-inorg"
        setRadioVal(()=> router.push("/results"))
    }



// ====================================================


if (quiz === "question-one-org" && radioVal == "male")
    {
        routeToChain2= "/tips/organicbad",
        setRadioVal(()=> router.push("/quiz/question-two-org"))
    }

    if (quiz === "question-two-org" && radioVal == "other")
    {
       
        routeToChain2= "question-one-org"
        setRadioVal(()=> router.push("/quiz/question-three-org"))

    }
    if (quiz === "question-three-org" && radioVal == "female")
    {

        routeToChain2= "/quiz/question-two-org"
        setRadioVal(()=> router.push("/results"))
    }
}
	//set a state here
	const [radioVal, setRadioVal] = useState("");
    var helpFadeIn = 0
    var leftIn = -500
    var topIn=10
    const[help, setHelp] = useState(false)
 
        if (help)
        {
            helpFadeIn=1
            leftIn = "50%"
        }
	//when a button is click
	



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
                    <RadioComp
                    question={questionChain}
                    onClick={(e)=>setRadioVal(e.target.value)}
                    label1={q1}
                    label2={q2}
                    label3={q3}
                    />
                    <MyHint 
                    op1={helpFadeIn}
                    leftValue={leftIn}
                    top={topIn}
                    hint={hintText}
                    hintHeader={hintHeaderText}
                    />
                </div>

                <div className="buttonCont">
                    <MyButton text="hint"  onClick={()=>setHelp(!help)}/>
                    <MyButton text={buttonText} onClick={handleResult}/>
                </div>

            

        </div>
        </QuizCont>
}


