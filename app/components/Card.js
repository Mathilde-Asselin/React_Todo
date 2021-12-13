import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import styles from "../styles/Card.module.css"

export default function Card(props) {
    return(
    <div className={styles.cardcontainer}>
        <h2>{props.title}</h2>
        <Image 
        width='100%'
        height= '100%'
        src={props.Image} alt=""/>
        <p>{props.desc}</p>
        <p>{props.price} euros</p>
        <button>Acheter</button>
    </div>
    )}