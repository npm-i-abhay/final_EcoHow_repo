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
import {OrganicContent} from '../../data/text'
import {OrganicHelp} from '../../data/text'
import {OrganicHint} from '../../data/text'
import {InorganicContent} from '../../data/text'
import {InorganicHelp} from '../../data/text'
import {InorganicHint} from '../../data/text'




const SubCatCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    // background-color:#376293;
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
        bannerText = "Organic",
        
        sourceNew1 = "../../veg.gif",
        sourceNew2 = "../../fruit.gif",
        sourceNew3 = "../../garden waste.gif",
        sourceNew4 = "../../sewage_3.gif",
        sourceNew5 = "../../meat.gif",
        sourceNew6 = "../../Wood.gif",
        
        textHeadNew1 = OrganicContent.Vegetable.title,
        textHeadNew2 =  OrganicContent.Fruits.title,
        textHeadNew3 = OrganicContent.GardenWaste.title,
        textHeadNew4 = OrganicContent.Sewage.title,
        textHeadNew5 = OrganicContent.Meat.title,
        textHeadNew6 = OrganicContent.Wood.title,
        
        textLongNew1 = OrganicContent.Vegetable.content,
        textLongNew2= OrganicContent.Fruits.content,
        textLongNew3 = OrganicContent.GardenWaste.content,
        textLongNew4 = OrganicContent.Sewage.content,
        textLongNew5 = OrganicContent.Meat.content,
        textLongNew6 = OrganicContent.Wood.content,
        
        hintChain4 = OrganicHelp.Subcat.content,

        routeToChain2 = "",

        onClickChain = ()=> {}
    }
)
{   
    const router = useRouter();
    const {subcat} = router.query

    if (subcat === "inorganic")
        {
            hintChain4 = InorganicHelp.Subcat.content
            bannerText = "Inorganic"
            routeToChain2 = "../category"
            textHeadNew1 = InorganicContent.Plastic.title,
            textHeadNew2 = InorganicContent.PlasticStraws.title,
            textHeadNew3 = InorganicContent.Styrofoam.title,
            textHeadNew4 = InorganicContent.Cardboard.title,
            textHeadNew5 = InorganicContent.Aluminium.title,
            textHeadNew6 = InorganicContent.Reuse.title,

            textLongNew1 = InorganicContent.Plastic.content,
            textLongNew2= InorganicContent.PlasticStraws.content,
            textLongNew3 = InorganicContent.Styrofoam.content,
            textLongNew4 = InorganicContent.Cardboard.content,
            textLongNew5 = InorganicContent.Aluminium.content,
            textLongNew6 = InorganicContent.Reuse.content,

            sourceNew1 = "../../plasticbag.gif",
            sourceNew2 = "../../plastic-straws-scene.gif",
            sourceNew3 = "../../styrofoam-scene.gif",
            sourceNew4 = "../../cardboard-scene.gif",
            sourceNew5 = "../../aluminium-scene.gif",
            sourceNew6 = "../../reuse-scene.gif",
        


            

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


