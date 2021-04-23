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

const TipsCont = styled.div `


.mainContainer
{
    display:flex;
    flex-direction:column;
    // justify-content:space-evenly;
    align-items: center;
    height:100%;
    width:100%  ;
    background-color:#376293;

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
        .containerAndButton
        {
            width:100%;
            height:500px;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:space-between;

        }
}


`

export default function Tips ({
   
    resultText = "",
    routeToChain2 ="",
    hintChain4 = "",
    onClickChain = ()=>{}
})
{

    const router = useRouter()
    const {tips} = router.query

    if (tips === "inorganicGood")
    {
        resultText = "nick likes eating dick sausage"
        routeToChain2 = "/evaluation/inorganic"
        onClickChain = ()=>router.push("/quiz/question-one")
    }
    
    if (tips === "inorganicBad")
    {
        resultText = "nick fucks anything that walks"
        routeToChain2 = "/evaluation/inorganic"
        onClickChain = ()=>router.push("/quiz/question-one")
    }
    if (tips === "organicGood")
    {
        resultText = "nick likes eating dick 3 times a day"
    }

    if (tips === "organicBad")
    {
        resultText = "nick nick nick sucka dick"
    }


    return <TipsCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
                <div className="hamburger">
                        <Menu 
                            routeToChain = {routeToChain2}
                            hintChain3 =    {hintChain4} />
                </div>
                
                <div className="banner">
                        {/* <MyBanner bgColor="#E5E5E5" /> */}
                        <MyBanner textColor="#E5E5E5"/> 
                </div>

                <div className="animation container">
                        <HeroContainer/>
                </div>
                
                
                <div className = "containerAndButton" >
                    <Results
                        text = {resultText}/>
                    <Button 
                    text="Test Your Knowledge"
                    onClick = {onClickChain}
                    />
                </div>
                
               
             

             </div>
        </TipsCont>
}

