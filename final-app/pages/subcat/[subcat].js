import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import MyBanner from '../../comps/Banner'
import Menu from '../../comps/Menu'
import Expander from '../../comps/ExpandCat'
import MyButton from '../../comps/Button'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {OrganicHelp} from '../../data/text'
import {OrganicCards} from '../../data/text'
import {InorganicCards} from '../../data/text'
import {MenuReferences} from '../../data/text'
import {MenuReferences2} from '../../data/text'
import styles from '../../styles/main.module.css'
const SubCatCont = styled.div `

.mainContainer
{
    display:flex;
    flex-direction:column;
    height:100%;
    width:100vw;
    background-color:${props=> props.themeColor};
    align-items:center;
    transition:all .5s;

    .banner
    {
        // margin:2em;
        width:90%;


            // .pageDescrip
            // {
            //     font-family: 'Montserrat', sans-serif;
            //     font-size:1.2em;
            //     color = ${props=> props.descripText}
            // }
    }

    .expandingConts
    {
        margin-bottom:2em;
    }


}
`
const DescriptionText = styled.p`
font-family: 'Montserrat', sans-serif;
font-size:1.2em;
color : ${props=> props.descripText};
transition:all 1s;

`



export default function SubCatMapped (
    {
        bannerText = "",
        hintChain4 = OrganicHelp.Subcat.content,
        routeToChain2 = "/category",
        onClickChain = ()=> {},
        contBgchain = "#21AAB535",
        subCatButton = "#71C4CA",
        textDescrip = "blue"
    }

        
)
{   
    const router = useRouter();
    const {subcat} = router.query
    const[moveHam, setMoveHam] = useState (true)
    const [banner, setBanner] = useState ("black")
    const [description, setDescription] = useState ("black")
    const [background, setBackground] = useState ("#F5F1ED")
    const [label, setLabels] = useState ("black")
    const [bodyText, setBody] = useState ("black")
    const [theme, setTheme] = useState (false)
    const [iconColor, setIcon] = useState ("#21AAB5")
    useEffect(()=>
          {
            if(theme)
            {
                setLabels("#F5F1ED")
                setBanner("#F5F1ED")
                setBackground("Black")
                setDescription("#F5F1ED")
                setBody ("#F5F1ED")
                setIcon("#F5F1ED")
            }
            if(theme == false)
            {
                setLabels("black")
                setBanner("black")
                setBackground("#F5F1ED")
                setDescription("black")
                setBody ("black")
                setIcon("#21AAB5")
            }
            }, [theme]);

    var cards = []
    var references = MenuReferences 
    if (moveHam === false)
    {
        references = MenuReferences2
    }

    if (subcat === "organic")
    {
        cards = OrganicCards
        bannerText="Organic"
        onClickChain = ()=>router.push("/evaluation/organic")
        contBgchain  = "#D7E6DB"
        subCatButton = "#5EBA92"
    }
    if (subcat === "inorganic")
        {
            cards = InorganicCards
            bannerText="Inorganic"
            onClickChain = ()=>router.push("/evaluation/inorganic")
        }

    return <SubCatCont className = {styles.scroller}
     themeColor={background}>
       
       <Head>
        <title> 
            tips page
        </title>    
        </Head>
        
        
        <div className="mainContainer"> 
               
               <div className ="header">
                    
               {references.map((value, index)=>{
                           return <Menu 
                           key = {index}
                           routeToChain = {routeToChain2}
                           hintChain3 =    {hintChain4}
                           rightPosition = {value.rightPositionChain}
                           contVisble = {value.contVisbleChain}
                           revealMenu = {value.revealMenuChain}
                           menuHeight = {value.menuHeightChain}
                           hideIcons ={value.hideIconsChain}
                           toggle = {value.toggleChain}
                           menuBg = {value.menuBgChain}
                           transLine1={value.transLine1Chain}
                           transLineOp2={value.transLineOp2Chain}
                           transLine3={value.transLine3Chain}
                           onClickDarkChain = {()=> setTheme(!theme)}
                           darkIconColorChain = {iconColor}
                           onClick = {()=> setMoveHam (!moveHam)}/>
                        })} 
               
               </div>
            {moveHam&&            
                <div className = "banner">

                    <MyBanner     
                    bgColor="#E5E5E5" 
                    text={bannerText}
                    textColor = {banner}
                    justifyText="left"
                    bannerHeight="50px"/>
                    
                    <DescriptionText descripText={description} > 
                    Expand the cards to read about each of the item, close when you are done. 
                    </DescriptionText>

                </div>
            
            }
            {moveHam&&
                <div className = "expandingConts">
                
                {cards.map((value,index)=>{
                    return <Expander 
                    key = {index}
                    source = {value.sourceNew}
                    text=   {value.textHeadNew}
                    textLong = {value.textLongNew}
                    contBg = {contBgchain}
                    textLabelCol = {label}
                    textLotsCol = {bodyText}/>
               
                })}
                </div>
            }

            {moveHam &&
                <MyButton
                    onClick={onClickChain}
                    text="Next Section"
                    bgcolor = {subCatButton}
                    />
            }

        </div>
        </SubCatCont>
}


