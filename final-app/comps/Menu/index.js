import styled from 'styled-components'
import Button from '../Button'
import MakeIcon from '../CircleIcons'
import React, {useState} from 'react';

const MenuContainer = styled.div `
height:${props => props.expandMenu};
width:100vw;
left:0;
border:2px solid black;
display:flex;
justify-content:center;
position:realtive;
transition:all 1s;

`



const MenuItemsHead = styled.div `
border:2px solid blue;
width:100%;
height:30px;
background-color:lightgreen;
text-align:center;
`


const MenuItemsConatiner = styled.div`
height:100vh;
width:100vw;
border:5px solid red;
display:${props => props.showMenu};
flex-direction:column;
justify-content:space-evenly;
align-items:center;
position:relative;
right:${props=> props.righty};
transition: all 1s;
// transition-delay:1s;
`

const HamContainer = styled.div `
position:absolute;
right:${props => props.hamRight};
z-index:1;
transition: all 1s;`


const HamIcon = styled.div
`   
    .hamLines
    {
        height:.25em;
        width:30px;
        margin:.5em;
        background-color:white;
        transition:all 1s;
    }
`
const TopBarContainer = styled.div `
display:flex;
justify-content:center;
// align-items:${props => props.hamAlign};
// transition:all 1s;

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
    toggle = false
    // hamieBarAlign = "center"
})=> 
{
    const[moveHam, setMoveHam] = useState (false)
    if (moveHam)
    {
        rightPosition="7.4em"
        // rightHam = "5em"
        revealMenu = "flex"
        menuHeight = "100vh"
        hideIcons = 0
        toggle = (!toggle)
        
    }
    console.log(toggle);
    return <MenuContainer expandMenu={menuHeight} >
                
               <TopBarContainer> 

                    <CircleIconsCont hiddenIcons = {hideIcons}>
                         <MakeIcon />
                         <MakeIcon text="?" />
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
                        
                            <MenuItemsHead>Home</MenuItemsHead>
                            <MenuItemsHead>Categories</MenuItemsHead>
                            <MenuItemsHead>{menuText}</MenuItemsHead>
                            <MenuItemsHead>Evalutaion</MenuItemsHead>
                
                </MenuItemsConatiner>

                </TopBarContainer> 

        </MenuContainer>
}

export default Menu