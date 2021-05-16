import styled from 'styled-components';
import Button from '../Button';
import HelpButton from '../HelpButton';
import MakeIcon from '../CircleIcons';
import {useRouter} from 'next/router';
import React, {useState} from 'react';
import styles from '../../styles/main.module.css'
import {GiMonsteraLeaf} from 'react-icons/gi'
import {AiTwotoneHome} from 'react-icons/ai'
import {RiRecycleFill} from 'react-icons/ri'
import {CgDatabase} from 'react-icons/cg'


const MenuContainer = styled.div `
height:${props => props.expandMenu};
width:100vw;
left:0;
display:flex;
background-color:${props => props.bgMenu};
justify-content:center;
position:realtive;
transition:all 1s;

`



const MenuItemsHead = styled.div `

`


const MenuItemsConatiner = styled.div`
height:100vh;
width:100vw;
display:${props => props.showMenu};
flex-direction:column;
justify-content:space-evenly;
align-items:center;
position:relative;
right:${props=> props.righty};
transition: all 1s; 

.headCont
{
// border:.2px solid blue;
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
height:50px;
text-align:center;
cursor:pointer;
}

`

const HamContainer = styled.div `
position:absolute;
right:${props => props.hamRight};
z-index:1;
transition: all 1s;
margin:10px;
cursor:pointer;`


const HamIcon = styled.div
`   
    .hamLines
    {
        height:.25em;
        width:30px;
        margin:.5em;
        background-color:#21AAB5;
        transition:all 1s;
    }
`
const TopBarContainer = styled.div `
display:flex;
justify-content:center;

`



const CircleIconsCont = styled.div`

display:flex;
margin-left:7em;

opacity : ${props => props.hiddenIcons};
transition:all 1s;
`



const Menu = ({
    menuText="Organic Info",
    rightHam = "0",
    rightPosition = "-55em",
    revealMenu = "flex",
    menuHeight="10vh",
    hideIcons = 1,
    toggle = false,
    hintChain3 = "coding is pain but I like using rusted gears of my brain",
    routeToChain = "",
    menuBg = "none",
    carryState = null
    // hamieBarAlign = "center"
})=> 
{
    const router = useRouter()
    const[moveHam, setMoveHam] = useState (false)
    const[position, setPosition] = useState (false)
    if (moveHam)
    {
        rightPosition="7.4em"
        // rightHam = "5em"
        revealMenu = "flex"
        menuHeight = "100vh"
        hideIcons = 0
        toggle = (!toggle)
        menuBg = "#5EBA9240"
        
    }

   
    console.log(toggle);
    return <MenuContainer 
            expandMenu={menuHeight}
            bgMenu = {menuBg} >
                
               <TopBarContainer> 

                    <CircleIconsCont hiddenIcons = {hideIcons}>
                         <MakeIcon routeTo = {routeToChain}/>
                         <HelpButton 
                         text="?"
                         hintChain2 = {hintChain3} />
                    </CircleIconsCont>



                    <HamContainer 
                    onClick = {()=> setMoveHam (!moveHam)}
                    hamRight = {rightHam}>
                        
                        <HamIcon> 
                            <div className="hamLines" >  </div>
                            <div className="hamLines">  </div>
                            <div className="hamLines">  </div>
                        </HamIcon>
                    
                    </HamContainer>
                
                    <MenuItemsConatiner 
                    righty={rightPosition}
                    showMenu = {revealMenu}>
                        
                        <div onClick = {()=> router.push("/home")}className="headCont">
                            <MenuItemsHead className = {styles.hamHead}  >Home
                            </MenuItemsHead>
                            <AiTwotoneHome className = {styles.hamIcons}  />
                        </div>
                        
                        <div  onClick = {()=> router.push("/category")} className="headCont">
                            <MenuItemsHead className = {styles.hamHead} 
                            >Categories
                            </MenuItemsHead>
                            <CgDatabase className = {styles.hamIcons}  />
                        </div>
                            
                        <div onClick = {()=> router.push("/subcat/organic")} className="headCont">
                            <MenuItemsHead className = {styles.hamHead} 
                             >Organic Info
                            </MenuItemsHead>
                            <GiMonsteraLeaf className = {styles.hamIcons}  />
                        </div>
                            
                        <div onClick = {()=> router.push("/subcat/inorganic")} 
                        className="headCont">
                            <MenuItemsHead className = {styles.hamHead} 
                            >Inorganic Info
                            </MenuItemsHead>
                            <RiRecycleFill className = {styles.hamIcons}/>
                        </div>
                           
                
                </MenuItemsConatiner>

                </TopBarContainer> 

        </MenuContainer>
}

export default Menu