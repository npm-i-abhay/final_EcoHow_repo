
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const board = (props)=>
{

    const drop = e =>
    {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id')


        const card= document.getElementById(card_id);
        card.style.display = 'block'

        e.target.appendChild(card); 
    }

    
    const dragOver = e =>
    {
        e.preventDefault;
    }

    return(
        <div 
            id={props.id}
            onDragOver = {dragOver}
            onDrop={drop}
            className={props.className}
        > 
             
            {props.children}
        </div>
    


    )
}

export default board;