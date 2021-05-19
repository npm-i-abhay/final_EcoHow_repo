
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
    height:100vh;
    width:100vw;
    justify-content:space-around;
    background-color:#F5F1ED;
    align-items:center;


        .yourResult
        {
    
            align-items:center;
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


        .buttonCont
        {
            display:flex;
            flex-direction:column
            height:30%;
            width:100%;
            
            justify-content:space-around;
            margin-bottom:10px;
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

                {/* <Menu/> */}
                <div className="yourResult">
                    
                    
                    <ResultVisual src="/results.gif"/>
                    <p className="resultText">
                        Great job! You can now apply what you’ve learned today in your daily habits, remeber that you can continue learning about organic and inorganic waste by revisting the categories. 
                    </p>
                    
                </div>
                <br></br>
            <div className = "buttonCont">
                <MyButton 
                    text="Back to Categories"
                    bgcolor="#3AB5A5"
                    onClick = {()=> router.push ("/category")}/>
                <MyButton 
                    text="Walk To The Park"
                    bgcolor="#21aab5"
                    onClick = {()=> router.push ("/GTest")}/>
             </div>  
        </div>
        </ResultsCont>
}



