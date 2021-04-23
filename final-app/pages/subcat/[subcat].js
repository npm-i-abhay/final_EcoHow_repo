import Head from 'next/head'
import React from 'react'
import MakeIcon from '../../comps/CircleIcons'
import styled from 'styled-components'
import MyVeggie from '../../comps/VeggieFruitIcon'
import MyBanner from '../../comps/Banner'
import Menu from '../../comps/Menu'
import MyInfo from '../../comps/RecycleInfo'
import Expander from '../../comps/ExpandCat'
import MyButton from '../../comps/Button'
import {useRouter} from 'next/router'



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

export default function SubCat (
    {
        bannerText = "",
        
        sourceNew1 = "",
        sourceNew2 = "",
        sourceNew3 = "",
        sourceNew4 = "",
        sourceNew5 = "",
        sourceNew6 = "",
        
        textHeadNew1 = "",
        textHeadNew2 = "",
        textHeadNew3 = "",
        textHeadNew4 = "",
        textHeadNew5 = "",
        textHeadNew6 = "",
        
        textLongNew1 = "",
        textLongNew2= "",
        textLongNew3 = "",
        textLongNew4 = "",
        textLongNew5 = "",
        textLongNew6 = "",
        
        hintChain4 = "",

        routeToChain2 = "",

        onClickChain = ()=> {}
    }
)
{   
    const router = useRouter();
    const {subcat} = router.query

    if (subcat === "inorganic")
        {
            hintChain4 = "whatever"
            bannerText = "InOrganic"
            routeToChain2 = "../category"
            textHeadNew1 = "blarg"
            textHeadNew2 = "bleh"

            onClickChain = ()=>router.push("/evaluation/inorganic")
        }

    return <SubCatCont >
       
       <Head>
        <title> tips page </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
               <div className ="header">
                    
                    <Menu
                    hintChain3={hintChain4}
                    routeToChain = {routeToChain2}/>
               
               </div>

                <div className = "banner">

                    <MyBanner     
                    bgColor="#E5E5E5" 
                    text={bannerText}
                    bannerHeight="50px"/>

                </div>

                <div className = "expandingConts">
                    <Expander 
                        source = {sourceNew1}
                        text=   {textHeadNew1}
                        textLong = {textLongNew1}/>
                   
                    <Expander 
                        source = {sourceNew2}
                        text=   {textHeadNew2}
                        textLong = {textLongNew2}/>
                    
                    <Expander   
                        source = {sourceNew3}
                        text= {textHeadNew3}
                        textLong = {textLongNew3}/>
                    
                    <Expander    
                        source = {sourceNew4}
                        text= {textHeadNew4}
                        textLong = {textLongNew4}/>

                    <Expander
                        source = {sourceNew5}
                        text= {textHeadNew5}
                        textLong = {textLongNew5}/>
                    <Expander
                        source = {sourceNew6}
                        text= {textHeadNew6}
                        textLong = {textLongNew6}/>
                </div>

                <MyButton
                    onClick={onClickChain}/>



              
               

        </div>
        </SubCatCont>
}


