import Head from 'next/head'
import React from 'react'
import MakeIcon from '../comps/CircleIcons'
import styled from 'styled-components'
import MyVeggie from '../comps/VeggieFruitIcon'
import MyBanner from '../comps/Banner'
import Menu from '../comps/Menu'
import MyInfo from '../comps/RecycleInfo'
import Expander from '../comps/ExpandCat'
import MyButton from '../comps/Button'


const SubCatCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    background-color:#376293;
    align-items:center;

    .banner
    {
        width:100%;
    }

    .expandingConts
    {
        
    }


}


`

export default function Tips ({
    screenHeight= 620
})
{
    return <SubCatCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
               <div className ="header">
                    
                    <Menu/>
               
               </div>

                <div className = "banner">

                    <MyBanner     
                    bgColor="#E5E5E5" 
                    text="Organic"
                    bannerHeight="50px"/>

                </div>

                <div className = "expandingConts">
                    <Expander/>
                    <Expander/>
                    <Expander/>
                    <Expander/>
                </div>

                <MyButton/>



              
               

        </div>
        </SubCatCont>
}


