import Head from 'next/head'
import React from 'react'
import Results from '../comps/Results'
import MyBanner from '../comps/Banner'
import MakeIcon from '../comps/CircleIcons'
import MyHeader from '../comps/RecycleInfo'
import MyAnswers from '../comps/Quiz'
import MyButton from '../comps/Button'
import MyCircle from '../comps/CircleIcons2'
import styled from 'styled-components'


const TipsCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:812px;
    width:375px;
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

export default function Tips ({
    screenHeight= 620
})
{
    return <TipsCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    <MakeIcon routeTo="/tips"/>
                    <MakeIcon text="?"/>
                    </div>  
                <div className="banner">
                    <MyBanner text="Test Your Knowledge" bgColor="#F5F1ED"/>   
                </div>
                <div className="answersCont">
                    <MyAnswers/>
                </div>

                <div className="buttonCont">
                    <MyButton text="hint"/>
                    <MyCircle routeTo="/results"/>
                </div>

                <div className="toggleCont">
                    toggles go here
                </div>
                

        </div>
        </TipsCont>
}


