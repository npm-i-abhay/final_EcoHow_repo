import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
import HeroContainer from '../../comps/HeroImage'
import Button from '../../comps/Button'
import MakeIcon from '../../comps/CircleIcons'
import styled from 'styled-components'
import MyHelp from '../../comps/HelpButton'
import Menu from '../../comps/Menu'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {InorganicTips} from '../../data/text'
import {OrganicTips} from '../../data/text'
import {InorganicHelp} from '../../data/text'
import {OrganicHelp} from '../../data/text'



const TipsCont = styled.div `
display:flex;
flex-direction:column;
height:100%;
justify-content:center;
background-color:#F5F1ED;
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
   
    resultText = "ojhjkjhh",
    routeToChain2 ="",
    hintChain4 = "",
    onClickChain = ()=>{},
    newSource="/blackbin.gif",
    newbgcolor="",
    newHeading="Oh no...",
    newHeadingColour="#7CC5A4",
    tipsBackground="url(../backgroundTree.svg)",
    backgroundPosition="0% 100%"
})
{
    
    const router = useRouter()
    const {tips} = router.query

    if (tips === "inorganicgood")
    {
        resultText = InorganicTips.GoodTips.content
        routeToChain2 = "/evaluation/inorganic"
        onClickChain = ()=>router.push("/quiz/question-one-inorg")
        hintChain4 = InorganicHelp.TipsGood.content
        newSource="/bluebins.gif"
        newbgcolor="#5EBA92"
        newHeading="Great job!"
    }
    
    if (tips === "inorganicbad")
    {
        resultText = InorganicTips.BadTips.content
        routeToChain2 = "/evaluation/inorganic"
        hintChain4 = InorganicHelp.TipsBad.content
        onClickChain = ()=>router.push("/quiz/question-one-inorg")
        newSource="/blackbin.gif"
        newbgcolor="#BA5E5E"
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
        newSource="/Mypot.gif"
        newbgcolor="#5EBA92"
        newHeading="Great job!"
    
    //ADD ALL SOURCES IN CONDTIONS
    
    }

    if (tips === "organicbad")
    {
        resultText = OrganicTips.BadTips.content
        hintChain4 = OrganicHelp.TipsBad.content
        routeToChain2 = "/evaluation/organic"
        onClickChain = ()=>router.push("/quiz/question-one-org")
        newSource="/greenbin.gif"
        newbgcolor="#BA5E5E"
        newHeadingColour="#C67B7B"
        tipsBackground="url(../backgroundTree2.svg)"
        backgroundPosition="100% 70%"
    }


    return <TipsCont bg={tipsBackground} bgPos={backgroundPosition}>
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
                <div className="hamburger">
                        <Menu 
                        routeToChain = {routeToChain2}
                        hintChain3 =    {hintChain4} />
                </div>
                    
                <Results
                text = {resultText}
                gifSource={newSource}
                bgcolor={newbgcolor}
                heading={newHeading}
                headingColour={newHeadingColour}
                />
                    
                
                <div className="buttonCont">
                    <Button 
                    text="Test Your Knowledge"
                    onClick = {onClickChain}
                    bgcolor="#376293"
                    />
                </div>    
             </div>
        </TipsCont>
}

