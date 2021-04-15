import Head from 'next/head'
import React from 'react'
import Results from '../comps/Results'
import MyBanner from '../comps/Banner'
import MakeIcon from '../comps/CircleIcons'
import styled from 'styled-components'

const TipsCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:812px;
    width:375px;
    background-color:red;

        .iconHeader
        {
            display:flex;
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
                    <MakeIcon/>
                    <MakeIcon/>
                    </div>  
                <div className="banner">
             
                        <MyBanner/>
                        <MyBanner/> 
                    
                   
                    
                </div>
                

        </div>
        </TipsCont>
}