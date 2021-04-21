import Head from 'next/head'
import React from 'react'
import Results from '../comps/Results'
import MyBanner from '../comps/Banner'
import Button from '../comps/Button'
import MakeIcon from '../comps/CircleIcons'
import styled from 'styled-components'

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
    screenHeight= 620
})
{

    return <TipsCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
                <div className="iconHeader">
                    <MakeIcon routeTo="/evaluation"/>
                    <MakeIcon text="?"/>
                </div>  
                
                <div className="banner">
                        <MyBanner bgColor="#E5E5E5" />
                        <MyBanner textColor="#E5E5E5"/> 
                </div>

                <div className = "containerAndButton" >
                    <Results/>
                    <Button text="Test Your Knowledge" routeTo="/quiz"/>
                </div>
                
                <div>
                </div>


                    
                   
                    
                

          
             <div>
             </div>

             </div>
        </TipsCont>
}

