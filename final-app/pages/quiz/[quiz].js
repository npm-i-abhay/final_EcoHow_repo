import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
import MakeIcon from '../../comps/CircleIcons'
import MyHeader from '../../comps/RecycleInfo'
import RadioComp from '../../comps/Quiz'
import MyButton from '../../comps/Button'
import styled from 'styled-components'
import Menu from '../../comps/Menu'
import {useRouter} from 'next/router'
import {useState} from 'react'
import MyHint from '../../comps/Hints';
import {ImCross} from 'react-icons/im'
import useSound from 'use-sound'


const QuizCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    background-color:#F5F1ED;
    background-image: url(${props => props.imageBg}.png);
    background-size:contain;
    background-repeat:no-repeat;
    background-position-x: -10em;
    background-position-y: 20em;

    
        .iconHeader
        {
            width:100%;
            display:flex;
            justify-content:space-between;
        } 
            
        .blur
        {
         filter:${props => props.blurBg};
         transition: all .7s;
        }
        .banner
        {
            width: 100%;
            // border:2px solid red;
            height:125px;
            display:flex;
            text-align:center;
            flex-direction:column;
            justify-content:center;
            align-items:center
        }

        .answersCont{
            display:flex;
            flex-direction:column
            height:50%;
            width:100%;
            // background-color:#E5E5E5;
            justify-content:center;
            margin-bottom:50px;
        }

        .buttonCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            justify-content:space-around;
            margin-top:2em;

            
        }

        .toggleCont{
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color#376293; 
            justify-content:center;
        }
        .promptCont
    {
        // border:2px solid red;
        height:100%;
        display:flex;
        justify-content:center;
        position:absolute;
        top:10%;
        width:100%;


            .closeIcon
            {
                font-size:2em;
                margin:.5em;
            }
    }
}
`
const Prompt = styled.div`
height:50vh;
width:85%;
position:absolute;
display:flex;
justify-content:flex-end;
background-color:#ddddbb;
z-index:2;
top:20%;
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
    hintHeaderText="Hint",
    bgImage = "/bluearrow",
    bgColorChain1 = "#71C4CA",
    fillColorChain = "#71C4CA",
    bgBlur = "blur(5px)"
})
{   
    const router = useRouter()
    const {quiz} = router.query
    
    var audio =  ("/audio/incorrect.wav")
    const Incorrect = () => {
    new Audio(audio).play()
}
    
var audioCorrect =  ("/audio/correct.wav")
const correct = () => 
{
    new Audio(audioCorrect).play()
}



    // const[quizCol, setQuizCol] = useState("#71C4CA")
    const[prompt, setPrompt] = useState(false)
    const [blury, setBlury] = useState ("blur(0px)")
    if (quiz === "question-one-org")
    {
    questionChain = "What kind of chemical elements  can generate a healthy compost?",
    routeToChain2= "/tips/organicbad"
    q1="Nitrogen and Carbon"
    q2="Hydrogen and Nitrogen"
    q3="Oxygen and carbon"
    hintText="One element creates energy and the other breaks organic matter."
    bgImage = "/leafbg"
    bgColorChain1 = "#7CC39F"
    fillColorChain = "#7CC39F"
    // setQuizCol("green") 
    }


      if (quiz === "question-two-org")
    {
        questionChain = "What happens if you add fresh citrus to your compost?"
        routeToChain2= "question-one-org"
        q1="Nothing, its perfectly fine to add to your compost"
        q2="It speeds up the decomposition rate"
        q3="It may kill the kill worms, and the microorganisms"
        hintText="Citrus is very acidic and takes a very long time to decompose."
        bgImage = "/leafbg"
        bgColorChain1 = "#7CC39F"
        fillColorChain = "#7CC39F"
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
        bgImage = "/leafbg"
        bgColorChain1 = "#7CC39F"
        fillColorChain = "#7CC39F"
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
                correct()
            }
            if (quiz === "question-one-inorg" && radioVal != "female")
            {
                
                routeToChain2= "/tips/inorganicbad"
                Incorrect()
                setPrompt(true)
                setBlury ("blur(5px)")
            }


            
            if (quiz === "question-two-inorg" && radioVal == "male")
            {
            
                routeToChain2= "/quiz/question-one-inorg"
                setRadioVal(()=> router.push("/quiz/question-three-inorg"))
                correct()
            }
            if (quiz === "question-two-inorg" && radioVal != "male")
            {
            
                routeToChain2= "/quiz/question-one-inorg"
                setPrompt(true)
                setBlury ("blur(5px)")
                Incorrect()
            }




            if (quiz === "question-three-inorg" && radioVal == "female")
            {
            
                routeToChain2= "/quiz/question-two-inorg"
                setRadioVal(()=> router.push("/results"))
                correct()
            }
            if (quiz === "question-three-inorg" && radioVal != "female")
            {
            
                routeToChain2= "/quiz/question-two-inorg"
                setPrompt(true)
                setBlury ("blur(5px)")
                Incorrect()
            }



// ====================================================

            if (quiz === "question-one-org" && radioVal == "male")
            {   
                routeToChain2= "/tips/organicbad",
                setRadioVal(()=> router.push("/quiz/question-two-org"))
                correct()
            }
            
           

            if (quiz === "question-one-org" && radioVal != "male")
            {
                routeToChain2= "/tips/organicbad"
                // setRadioVal(alert("Wrong Answer! Read The hint and try again."))
                // setPrompt(true)
                setPrompt(true)
                setBlury ("blur(5px)")
                Incorrect()
                
               
            }


            



            if (quiz === "question-two-org" && radioVal == "other")
            {
            
                routeToChain2= "question-one-org"
                setRadioVal(()=> router.push("/quiz/question-three-org"))
                correct()
            }
            if (quiz === "question-two-org" && radioVal != "other")
            {
            
                routeToChain2= "question-one-org"
                setPrompt(true)
                setBlury ("blur(5px)")
                Incorrect()
            }


            if (quiz === "question-three-org" && radioVal == "female")
            {

                routeToChain2= "/quiz/question-two-org"
                setRadioVal(()=> router.push("/results"))
                correct()
            }
            if (quiz === "question-three-org" && radioVal != "female")
            {

                routeToChain2= "/quiz/question-two-org"
                setPrompt(true)
                Incorrect ()
                setBlury ("blur(5px)")
            }
}
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




    return <QuizCont    
            imageBg = {bgImage}
            blurBg = {blury} >
       <Head>
        <title> Quiz page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
               
               
                <div className="iconHeader blur">
                    <Menu routeToChain = {routeToChain2} hintChain3="There are a total of three questions.You may click on the hint button at any time to help yourself throughout the quiz." 
                    />
                </div>  
                    

                <div className="banner blur" >
                    <MyBanner 
                    text="Test Your Knowledge" 
                    bgColor="#F5F1ED"
                    justifyText="center"/>   
                </div>

               
                

                <div className="answersCont blur">
                    <RadioComp
                    question={questionChain}
                    onClick={(e)=>setRadioVal(e.target.value)}
                    label1={q1}
                    label2={q2}
                    label3={q3}
                    fillColor = {fillColorChain}
                    />
     
                    <MyHint 
                    op1={helpFadeIn}
                    leftValue={leftIn}
                    top={topIn}
                    hint={hintText}
                    hintHeader={hintHeaderText}
                    />
                </div>
                
                { prompt &&
                    <div className = "promptCont">
                        <Prompt>
                            <ImCross className="closeIcon"
                            onClick = {()=>{ 
                                setPrompt(false), 
                                setBlury("blur(0px)")}}>
                            </ImCross>

                        </Prompt>
                    </div>
                }



                <div className="buttonCont blur">
                    <MyButton 
                    text="hint"
                    onClick={()=>setHelp(!help)}
                    bgcolor="#376293"/>
                    <MyButton 
                    text={buttonText}
                    onClick= {handleResult}
                    bgcolor={bgColorChain1}/>
                   
                     {/* <MyButton onClick= {start}/>        */}
                        
                </div>

            

        </div>
        </QuizCont>
}


