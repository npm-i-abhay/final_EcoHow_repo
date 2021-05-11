import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'
import Dboard from '../comps/Dboard'
import DItem from '../comps/Ditem'
import styles from '../styles/main.module.css'
const Gtest = ()=>
{
    return (
        
        <div className = {styles.drag}>
        
            <div className={styles.dragContainer}>
                <Dboard id ="board-1" className = {styles.board} >
                    <DItem id = "item-1" className={styles.dragItem}draggable="true">
                        <p>item -1 </p>
                    </DItem>  
                </Dboard>
                <Dboard id ="board-2" className={styles.board}>
                    <DItem id = "item-2" className={styles.dragItem} draggable="true">
                        <p>item -2 </p>
                    </DItem>  
                </Dboard>
            </div>

            

        </div>



    )
}

export default Gtest;