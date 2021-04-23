import Head from 'next/head'
import React from 'react'
import Results from '../../comps/Results'
import MyBanner from '../../comps/Banner'
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


.mainContainer
{
    display:flex;
    flex-direction:column;
    align-items: center;
    height:100vh;
    width:100vw;
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
   
    resultText = "ojhjkjhh",
    routeToChain2 ="",
    hintChain4 = ""
})
{

    const router = useRouter()
    const {tips} = router.query

    if (tips === "inorganicgood")
    {
        resultText = InorganicTips.GoodTips.content
        routeToChain2 = "/evaluation/inorganic"
        hintChain4 = InorganicHelp.TipsGood.content
    }
    
    if (tips === "inorganicbad")
    {
        resultText = InorganicTips.BadTips.content
        routeToChain2 = "/evaluation/inorganic"
        hintChain4 = InorganicHelp.TipsBad.content
    }
    if (tips === "organicgood")
    {
        resultText = OrganicTips.GoodTips.content
        hintChain4 = OrganicHelp.TipsGood.content
    }

    if (tips === "organicbad")
    {
        resultText = InorganicTips.BadTips.content
        hintChain4 = OrganicHelp.TipsBad.content
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

                <div className = "containerAndButton" >
                    <Results
                        text = {resultText}/>
                    <Button text="Test Your Knowledge" routeTo="/quiz"/>
                </div>
                
                <div>
                </div>
             <div>
             </div>

             </div>
        </TipsCont>
}

