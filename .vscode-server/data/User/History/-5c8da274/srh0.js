import React, { useEffect } from 'react'
//import styles from './styles.module.css'

export const Meme = () =>{
  
    useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes')
    }, []);
  
    return <>Hello World from meme land</>;
}