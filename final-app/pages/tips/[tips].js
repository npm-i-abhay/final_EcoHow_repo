import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
import HeroContainer from '../../comps/HeroImage'
import Button from '../../comps/Button'
import MakeIcon from '../../comps/CircleIcons'
import styled from 'styled-components'
import styles from '../../styles/main.module.css'
import MyHelp from '../../comps/HelpButton'
import Menu from '../../comps/Menu'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {InorganicTips} from '../../data/text'
import {OrganicTips} from '../../data/text'
import {InorganicHelp} from '../../data/text'
import {OrganicHelp} from '../../data/text'
import {MenuReferences} from '../../data/text'
import {MenuReferences2} from '../../data/text'



const TipsCont = styled.div `
display:flex;
flex-direction:column;
height:100%;
transition:all 1s;
justify-content:center;
background-color:${props=> props.mainBg};
background-image:${props => props.bg};
background-repeat:no-repeat;
background-position:${props => props.bgPos};
// background-size: 40% 30%;


.mainContainer
{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    width:100%;

        .iconHeader
        {
            display:flex;
            width:100%;
            justify-content:space-between;
            
        } 
        
        .banner
        {
            width: 100%;
            height:200px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }
        .buttonCont{
            display:flex;
            justify-content:center;
            width:100%;
            margin:2em;
        }
}


`

export default function Tips ({
   
    resultText = "something about Henry here",
    routeToChain2 ="",
    hintChain4 = "",
    onClickChain = ()=>{},
    newSource="/transparent-blackbin.gif",
    newbgcolor="",
    newHeading="Oh no...",
    newHeadingColour="#7CC5A4",
    tipsBackground="url(../backgroundTree.svg)",
    backgroundPosition="0% 100%"
})
{
    
    const router = useRouter()
    const {tips} = router.query
    var references = MenuReferences
    const[moveHam, setMoveHam] = useState (true)
    if (moveHam === false)
    {
        references = MenuReferences2
    }





    const [bodyText, setBody] = useState ("black")
    const [background, setBackground] = useState ("#F5F1ED")
    const [iconColor, setIcon] = useState ("#21AAB5")
    const [theme, setTheme] = useState (false)

    useEffect(()=>
          {
            if(theme)
            {   
                setIcon("#F5F1ED")
                setBackground("black")
                setBody ("#21AAB5")

            }
            if(theme == false)
            {

                setBackground("#F5F1ED")
                setBody ("black")
                setIcon("#21AAB5")
            }
            }, [theme]);





    if (tips === "inorganicgood")
    {
        resultText = InorganicTips.GoodTips.content
        routeToChain2 = "/evaluation/inorganic"
        onClickChain = ()=>router.push("/quiz/question-one-inorg")
        hintChain4 = InorganicHelp.TipsGood.content
        newSource="/transparent-bluebins.gif"
        newbgcolor="#5EBA9200"
        newHeading="Great job!"
        
    }
    
    if (tips === "inorganicbad")
    {
        resultText = InorganicTips.BadTips.content
        routeToChain2 = "/evaluation/inorganic"
        hintChain4 = InorganicHelp.TipsBad.content
        onClickChain = ()=>router.push("/quiz/question-one-inorg")
        newSource="/transparent-blackbin.gif"
        newbgcolor="#BA5E5E00"
        newHeadingColour="#C67B7B"
        tipsBackground="url(../backgroundTree2.svg)"
        backgroundPosition="100% 60%"
    }
    if (tips === "organicgood")
    {
        resultText = OrganicTips.GoodTips.content
        hintChain4 = OrganicHelp.TipsGood.content
        routeToChain2 = "/evaluation/organic"
        onClickChain = ()=>router.push("/quiz/question-one-org")
        newSource="/transparent-pot.gif"
        newbgcolor="#5EBA9200"
        newHeading="Great job!"
    
    //ADD ALL SOURCES IN CONDTIONS
    
    }

    if (tips === "organicbad")
    {
        resultText = OrganicTips.BadTips.content
        hintChain4 = OrganicHelp.TipsBad.content
        routeToChain2 = "/evaluation/organic"
        onClickChain = ()=>router.push("/quiz/question-one-org")
        newSource="/transparent-greenbin.gif"
        newbgcolor="#368B8B00"
        newHeadingColour="#C67B7B"
        tipsBackground="url(../backgroundTree2.svg)"
        backgroundPosition="100% 70%"
    }


    return <TipsCont 
            bg={tipsBackground} 
            bgPos={backgroundPosition}
            className= {styles.scroller}
            mainBg= {background}>
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
                <div className="hamburger">
                {references.map((value, index)=>{
                           return <Menu 
                           key = {index}
                           routeToChain = {routeToChain2}
                           hintChain3={hintChain4}
                           rightPosition = {value.rightPositionChain}
                           contVisble = {value.contVisbleChain}
                           revealMenu = {value.revealMenuChain}
                           menuHeight = {value.menuHeightChain}
                           hideIcons ={value.hideIconsChain}
                           toggle = {value.toggleChain}
                           menuBg = {value.menuBgChain}
                           transLine1={value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           onClick = {()=> setMoveHam (!moveHam)}
                           onClickDarkChain = {()=> setTheme(!theme)}
                           darkIconColorChain = {iconColor}/>
                        })} 
                </div>
        {moveHam &&                
                <Results
                text = {resultText}
                gifSource={newSource}
                bgcolor={newbgcolor}
                heading={newHeading}
                headingColour={newHeadingColour}
                textResultCol = {bodyText}
                />
        }            

        {moveHam &&        
                <div className="buttonCont">
                    <Button 
                    text="Test Your Knowledge"
                    onClick = {onClickChain}
                    bgcolor="#368B8B"
                    />

                </div>    
        }        
             </div>
        </TipsCont>
}

