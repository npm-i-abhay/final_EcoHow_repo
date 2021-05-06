
import Head from 'next/head'
import React from 'react'
import MakeIcon from '../comps/CircleIcons'
import MyPlant from '../comps/Happyplant'
import MyStar from '../comps/Stars'
import MyButton from '../comps/Button'

import {useRouter} from 'next/router'

import styled from 'styled-components'
import Menu from '../comps/Menu'


const ResultsCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    justify-content:space-around;
    background-color:#F5F1ED;
    align-items:center;


        .yourResult
        {
    
            align-items:center;
            // height:100%;
            display:flex;
            flex-direction:column;

                .resultText
                {
                    font-size:1.5em;
                    width:80%;
                    margin-top:1.5em;
                    font-family: 'Montserrat', sans-serif;
                }

        }

        .iconHeader
        {
            width:100%;
            display:flex;
            justify-content:flex-end;
        } 
        
        .banner
        {
            width: 100%;
            height:125px;
            display:flex;
            flex-direction:column;
            justify-content:space-around;
        }

        .answersCont
        {
            display:flex;
            flex-direction:column
            height:50%;
            width:100%;
            background-color:#376293;
            justify-content:center;
            margin-bottom:50px;
        }

        .buttonCont
        {
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color:#376293; 
            justify-content:space-between;
            margin-bottom:10px;
        }

        .toggleCont
        {
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            background-color#376293; 
            justify-content:center;
        }


}

`

const ResultVisual = styled.img`
object-fit:contain;
height:70%;
width:70%;
`


export default function Tips ({
    screenHeight= 620
})



{
    const router = useRouter()
    return <ResultsCont >
       
       <Head>
        <title> Result page </title>    
        </Head>
        
        
        <div className="mainContainer">

                <Menu/>
                <div className="yourResult">
                    
                    
                    <ResultVisual src="/positiveresult.png"/>
                    <p className="resultText">
                        Great job! You can now apply what you’ve learned today in your daily habits, remeber that you can continue learning about organic and inorganic waste by revisting the categories. 
                    </p>
                    
                </div>
                <br></br>
                
                <MyButton 
                    text="Back to Categories"
                    bgcolor="#3AB5A5"
                    onClick = {()=> router.push ("/category")}/>
               
        </div>
        </ResultsCont>
}



