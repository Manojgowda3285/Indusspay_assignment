import { Stack } from "@mui/material"
import styles from "./Footer.module.css"
import { Facebook, Instagram, Twitter } from "@mui/icons-material"

const Footer = () => {
  return (
  <div className={styles["footer-container"]}>
   <div className="container">
   
     <Stack  px={{xs:0 ,md:4}} pb={4}  borderBottom="1px solid rgba(255, 255, 255, 0.5)" justifyContent="space-between" alignContent="center" direction={{xs:"column",sm:"row   "}} width="100%" gap={"2rem"}>
        <Stack flex={1.5} spacing={3} >
        <h2 className={styles["logo"]} >Panto</h2> 
        <p style={{maxWidth:"300px"}} className={styles["subtitle"]}>
        The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
        </p>

        </Stack>
        <Stack flex={1} spacing={3}>
        <h4 className={styles["header"]}>
        Services
        </h4>
        <p className={styles["subtitle"]}>Email Marketing</p>
        <p className={styles["subtitle"]}>Campaigns</p>
        <p className={styles["subtitle"]}>Branding</p>
        </Stack>
        <Stack  flex={1}spacing={3}>
        <h4 className={styles["header"]}>
        Furniture
        </h4>
        
        <p className={styles["subtitle"]}>Beds</p>
        <p className={styles["subtitle"]}>Chair</p>
        <p className={styles["subtitle"]}>All</p>
        </Stack>
        <Stack flex={1} spacing={3}>
        <h4 className={styles["header"]}>
        Follow Us
        </h4>
        <Stack direction="row" gap={1} alignItems="center">
       <Facebook sx={{color:"#FFF"}}/>
        <p className={styles["subtitle"]}>Facebook</p>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
      <Twitter sx={{color:"#FFF"}}/>
        <p className={styles["subtitle"]}>Twitter</p>
        </Stack>
        <Stack direction="row" gap={1} alignItems="center">
      <Instagram sx={{color:"#FFF"}}/>
        <p className={styles["subtitle"]}> Instagram</p>
        </Stack>
        </Stack>
     </Stack>
     <Stack pt={2} direction="row" width="100%" justifyContent="space-between">
        <p className={styles["copy"]}>{`Copyright © ${new Date().getFullYear()} `}</p>
        <Stack direction="row" gap="1rem">
            <p className={styles["copy"]}>Terms & Conditions</p>
            <p className={styles["copy"]}>Privacy Policy</p>
        </Stack>
     </Stack>
     
   </div>
  </div>
  )
}

export default Footer