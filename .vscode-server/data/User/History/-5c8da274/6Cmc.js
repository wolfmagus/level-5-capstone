import React, { useEffect } from 'react'
//import styles from './styles.module.css'

export const Meme = () =>{
  
    useEffect(() =>{
        fetch('https://api.imgflip.com/get_memes').then(res=>
            res.json().then(res =>{
                console.log();
            })
        );
    }, []);
  
    return <>Hello World from meme land</>;
}