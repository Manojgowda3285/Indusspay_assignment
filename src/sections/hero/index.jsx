import React from 'react'
import styles from "./Hero.module.css"
import Navbar from '../../layout/navbar'
import { Box, IconButton, InputBase, Stack } from '@mui/material'
import search_btn from "../../assets/images/search_btn.svg"
const Hero = () => {
  return (
    <div className={styles["hero-container"]}>
        <Navbar/>
        <div className='container'>
           <Stack spacing={4} width="100%" justifyContent="center" alignItems="center">

            <Stack spacing={1}  justifyContent="center" alignItems="center">
            <h1 className={styles['title']}>Make your interior more
             minimalistic & modern</h1>

             <div className={styles['sub-title']}>
             <h5 >
             Turn your room with panto into a lot more minimalist and modern with ease and speed
             </h5>
             </div>
            </Stack>
             

                <div className={styles["search"]}>
                     <InputBase sx={{"&.MuiInputBase-root":{
                       color:"#FFF",
                       fontFamily:"Gilroy-Regular",
                       fontSize:"18px",
                       fontWeight:400,
                       flex:1,
                        
                     }}}/>
                   
                        <Box component="img" maxWidth="40px" src={search_btn}/>
                 
                </div>

           </Stack>
        </div>
    </div>
  )
}

export default Hero