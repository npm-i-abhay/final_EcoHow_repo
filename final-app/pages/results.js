
import Head from 'next/head'
import React from 'react'
import MakeIcon from '../comps/CircleIcons'
import MyPlant from '../comps/Happyplant'
import MyStar from '../comps/Stars'
import MyButton from '../comps/Button'
import {useRouter} from 'next/router'

import styled from 'styled-components'


const TipsCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100vh;
    width:100vw;
    background-color:#376293;
    align-items:center;

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

        .starsContainer{
            display:flex;
            justify-content:center;
            width:100%;
            height:60px;
            margin:20px;
            margin-bottom:60px;
        }

        .gifContainer{

        }

}


`

export default function Tips ({
    screenHeight= 620
})



{
    const router = useRouter()
    return <TipsCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    <MakeIcon text="?"/>
                </div>

                <div className="starsContainer">
                    <MyStar/>
                    <MyStar/>
                    <MyStar/>
                </div>

                <div className="gifContainer">
                    <MyPlant/>
                </div>
                <br></br>
                <MyButton 
                text="Back to Categories"
                onClick = {()=> router.push ("/category")}/>
               
        </div>
        </TipsCont>
}



