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
import {useState, useEffect} from 'react'
import MyHint from '../../comps/Hints';
import {ImCross} from 'react-icons/im'
import {MenuReferences} from '../../data/text'
import {MenuReferences2} from '../../data/text'
import styles from '../../styles/main.module.css'


const QuizCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    background-color:${props => props.bgColMain};
    background-image: url(${props => props.imageBg}.png);
    background-size:contain;
    transition:all 1s;
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
        height:100%;
        display:flex;
       
        justify-content:center;
        position:absolute;
        top:20%;
        width:100%;


            .closeIcon
            {   
                display:flex;
                font-size:2em;
                // margin:.5em;
            }
               
        .flex-Icon
        {
            display:flex;
            // margin-top:1em;
            width:90%;
            justify-content:flex-end;
        }
        .wrongAns
        {
            
            display:flex;
            width:80%;
            font-family: 'Montserrat', sans-serif;
            font-size:1.5em;
            // margin-bottom:2em;
        }
    }
}
`
const Prompt = styled.div`
height:40vh;
width:85%;
position:absolute;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center;
background-color:#21aab5;
color:#F5F1ED;
border-radius:20px;
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
    mainBgCol = "#F5F1ED" ,
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
        var references = MenuReferences
    const[moveHam, setMoveHam] = useState (true)
    if (moveHam === false)
    {
        references = MenuReferences2
    }
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
        q3="It may kill the worms, and the microorganisms"
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
        hintText="Remember, the blue bin is where we place all our recyclable items. "
    }
    if (quiz === "question-two-inorg")
    {
        questionChain = "Which of the following can minimize electronic waste?"
        routeToChain2= "/quiz/question-one-inorg"
        q1="Planning and researching carefully a product before purchasing  "
        q2="Recycling your electronic waste"
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
    var helpFadeIn = 1
    var leftIn = -500
    var topIn=20
    const[help, setHelp] = useState(false)
 
        if (help)
        {
            
            leftIn = "50%"
        }	
    
        const [label, setLabels] = useState ("black")
        const [banner, setBanner] = useState ("black")
        const [background, setBackground] = useState ("#F5F1ED")
        const [theme, setTheme] = useState (false)
        const [iconColor, setIcon] = useState ("#21AAB5")


          useEffect(()=>
          {
            if(theme)
            {
                setLabels("#F5F1ED")
                setBanner("#F5F1ED")
                setBackground("Black")
                setIcon("#F5F1ED")
            }
            if(theme == false)
            {
                setIcon("#21AAB5")
                setLabels("black")
                setBanner("black")
                setBackground("#F5F1ED")
            }
            }, [theme]);
        
    return <QuizCont    
            imageBg = {bgImage}
            blurBg = {blury}
            bgColMain = {background}
            className = {styles.scroller} >
       <Head>
        <title> Quiz page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
               
                <div className="iconHeader blur">
                {references.map((value, index)=>{
                           return <Menu 
                           key = {index}
                           routeToChain = {routeToChain2}
                           
                           rightPosition = {value.rightPositionChain}
                           contVisble = {value.contVisbleChain}
                           revealMenu = {value.revealMenuChain}
                           menuHeight = {value.menuHeightChain}
                           hideIcons ={value.hideIconsChain}
                           toggle = {value.toggleChain}
                           menuBg = {value.menuBgChain}
                           displayToggleChain= "0"
                           displayHintChain1= "none"
                           transLine1={value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           onClick = {()=> setMoveHam (!moveHam)}
                           onClickDarkChain = {()=> setTheme(!theme)}
                           darkIconColorChain = {iconColor}/>
                        })} 
                </div>  
                    
            {moveHam &&
                <div className="banner blur" >
                    <MyBanner 
                    text="Test Your Knowledge" 
                    textColor = {banner}
                    bgColor="#F5F1ED"
                    justifyText="center"/>   
                </div>
            }
               
                
               {moveHam &&
                <div className="answersCont blur">
                    <RadioComp
                    question={questionChain}
                    onClick={(e)=>setRadioVal(e.target.value)}
                    label1={q1}
                    label2={q2}
                    label3={q3}
                    fillColor = {fillColorChain}
                    labelCol = {label}
                    />


            {help &&    
                    <MyHint 
                    op1={helpFadeIn}
                    leftValue={leftIn}
                    top={topIn}
                    hint={hintText}
                    hintHeader={hintHeaderText}
                    onClick = {()=>setHelp(!help)}/>
            }        
                </div>
            } 
                { prompt &&
                    <div className = "promptCont">
                        
                        <Prompt>
                            <div className="flex-Icon">
                            <ImCross className="closeIcon"
                            onClick = {()=>{ 
                                setPrompt(false), 
                                setBlury("blur(0px)")}}>
                            </ImCross>
                            </div>

                            <div className ="wrongAns">
                            <p >
                                    Oops, Wrong Answer!
                                    Please read the hint and try again.
                            </p>   
                            </div>
                        </Prompt>
                        
                    </div>
                }


            {moveHam &&
                <div className="buttonCont blur">
                    <MyButton 
                    text="hint"
                    onClick={()=>setHelp(!help)}
                    bgcolor="#368B8B"/>
                    <MyButton 
                    text={buttonText}
                    onClick= {handleResult}
                    bgcolor={bgColorChain1}/>
                        
                        
                </div>
            }
            

        </div>
        </QuizCont>
}


