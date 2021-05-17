import React, {useState} from 'react'
import styled from 'styled-components'



const DropCont = styled.img`

object-fit:cover;
height:100%;
width:100%;
border:2px solid black;
transition:all .5s;

`;
const DropCont2 = styled.img`

object-fit:cover;
// border:2px solid black;
height:100%;
width:100%;
`;
const DropCont3 = styled.img`

object-fit:cover;
// border:2px solid black;
height:100%;
width:100%;
`;


const DragBox = styled.img`
cursor:pointer;
object-fit:contain;
border:1px solid black;
margin:1em;
height:60%;
// width:50%;

`;
const Wrapper = styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
border:5px solid blue;
justify-content:flex-end;
background-image: url(/sortingBg.png);
background-size:cover;
background-repeat:no-repeat;
// background-position-x: 1em;
// background-position-y: 20em;

.sortingItems
{
    border:2px solid magenta;
    height:8%;
    display:flex;
}

.dropTragetsCont
{

    display:flex;
    border:2px solid red;
    align-items:flex-end;

    justify-content:space-around;
    height:40vh;
    width:100%;

    .imgConts
    {
        border:2px solid yellow;
        height:50%;
        width:50%;
    }
}

`


var boxInd = null
var change = 1;
var timer = null
var timer2 = null
var timer3 = null
export default function DnD({
    
    sourceN = "/alien 2/alienrwalk19.gif"
    
})
{

    const [box, setBox] = useState([true, true])
    const [changeSrc, setSource] = useState("/blackbins/black1.png")
    const [changeSrc2, setSource2] = useState("/bluebins/blue1.png")
    const [changeSrc3, setSource3] = useState("/greenbins/green1.png")
    // const [box2, setBox2] = useState(true)

    const onDragStart = (ind) =>
    {
        console.log("begining", ind)
        boxInd = ind
    }
    
        const onDrag = (e) =>
        {   
            e.preventDefault()
      
        }
    
    const onDragEnd = (e) =>
    {
        console.log("ending")
    }
        

    const onDragOver = (e) =>
    {
        e.preventDefault()
      
    }
    const onDrop = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer)
        e.target.style.backgroundColor = ""
        timer =null
        setSource ("/blackbins/black1.png")
        if (boxInd === 0)

        {

            box[boxInd] = false;
            setBox([...box]);
        
        }
        else
        {
            alert("wrong")
        }

    }

    const onDrop2 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer2)
        e.target.style.backgroundColor = ""
        timer =null
        setSource2 ("/bluebins/blue1.png")
        if(boxInd === 1)

        {
            box[boxInd] = false;
            setBox([...box]);
            
        }
    }
    const onDrop3 = (e) =>
    {   
        e.preventDefault()
        console.log("I dropped")
        clearInterval(timer3)
        e.target.style.backgroundColor = ""
        setSource3 ("/greenbins/green1.png")
        timer =null
        if(boxInd === 1)

        {
            box[boxInd] = false;
            setBox([...box]);
            
        }
    }


    const onDragEnter = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource ("/blackbins/black" + change + ".png")
            // console.log(change, sourceN)
        
        },50)
       
    }


    const onDragEnter2 = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer2 =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource2 ("/bluebins/blue" + change + ".png")
            // console.log(change, sourceN)
        
        },50)
       
    }
    const onDragEnter3 = (e)=>
    {
        e.preventDefault()
        e.target.style.backgroundColor = "red"
        

    timer3 =  setInterval(function()
        {

            change++
            if (change>90)
            {
                change = 0
            }
            setSource3 ("/greenbins/green" + change + ".png")
            console.log(change, sourceN)
        
        },50)
       
    }


    const onDragLeave = (e)=>
    {
        e.preventDefault()
        clearInterval(timer)
        timer =null
        setSource ("/blackbins/black1.png")
        e.target.style.backgroundColor = ""
    }
    const onDragLeave2 = (e)=>
    {
        e.preventDefault()
        clearInterval(timer2)
        timer2 =null
        setSource2 ("/bluebins/blue1.png")
        e.target.style.backgroundColor = ""
    }
    const onDragLeave3 = (e)=>
    {
        e.preventDefault()
        clearInterval(timer3)
        timer3 =null
        setSource3 ("/greenbins/green1.png")
        e.target.style.backgroundColor = ""
    }
    return<Wrapper>
  
    


        <div className = "dropTragetsCont">     
            
            <div className= "imgConts">  
                <DropCont
                onDragOver = {onDragOver}
                onDrop = {onDrop}
                onDragEnter = {onDragEnter}
                onDragLeave = {onDragLeave}
                src = {changeSrc}
                id = "cont-one"/>
            </div>    


            <div className= "imgConts">    
                <DropCont2
                onDragOver = {onDragOver}
                onDrop = {onDrop2}
                onDragEnter = {onDragEnter2}
                onDragLeave = {onDragLeave2}
                src = {changeSrc2}
                /> 
            </div>    


            <div className= "imgConts">
                <DropCont3
                onDragOver = {onDragOver}
                onDrop = {onDrop3}
                onDragEnter = {onDragEnter3}
                onDragLeave = {onDragLeave3}
                src = {changeSrc3}
                /> 
            </div> 
        </div>  



            <div className = "sortingItems">
            {box[0] && 
                    <DragBox 
                        draggable = {true}
                        onDragStart = {()=>onDragStart(0)}
                        onDrag = {onDrag}
                        onDragEnd = {onDragEnd}
                        src = "/broccoli.png"
                    /> 
            }
            
             
           
        {box[1] && 
                <DragBox 
                    draggable = {true}
                    onDragStart = {()=>onDragStart(1)}
                    onDrag = {onDrag}
                    onDragEnd = {onDragEnd}
                    src = "/broccoli.png"/> 
        }
            
        </div>


                



            </Wrapper>
}