import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import MyBanner from '../../comps/Banner'
import Menu from '../../comps/Menu'
import Expander from '../../comps/ExpandCat'
import MyButton from '../../comps/Button'
import {useRouter} from 'next/router'
import {OrganicHelp} from '../../data/text'
import {OrganicCards} from '../../data/text'
import {InorganicCards} from '../../data/text'
import styles from '../../styles/main.module.css'
const SubCatCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    background-color:#F5F1ED;
    align-items:center;

    .banner
    {

        width:90%;

    }

    .expandingConts
    {
        margin-bottom:2em;
    }


}
`

export default function SubCatMapped (
    {
        bannerText = "",
        
        hintChain4 = OrganicHelp.Subcat.content,

        routeToChain2 = "/category",

        onClickChain = ()=> {}
    }
)
{   
    const router = useRouter();
    const {subcat} = router.query
    var cards = []
     
    if (subcat === "organic")
    {
        cards = OrganicCards
        bannerText="Organic"
        onClickChain = ()=>router.push("/evaluation/organic")
    }
    if (subcat === "inorganic")
        {
            cards = InorganicCards
            bannerText="InOrganic"
          onClickChain = ()=>router.push("/evaluation/inorganic")
        }

    return <SubCatCont  >
       
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
                    justifyText="left"
                    bannerHeight="50px"/>

                    <p className={styles.content}> 
                      Expand the card to read about each section  
                    </p>
                </div>

                <div className = "expandingConts">
                
                {cards.map((value,index)=>{
                    return <Expander 
                    key = {index}
                    source = {value.sourceNew}
                    text=   {value.textHeadNew}
                    textLong = {value.textLongNew}/>
               

                })}
                </div>

                <MyButton
                    onClick={onClickChain}
                    text="Next Section"
                    />
        </div>
        </SubCatCont>
}


