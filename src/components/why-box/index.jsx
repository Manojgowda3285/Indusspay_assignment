import { Box, Stack } from '@mui/material'
import styles from "./WhyBox.module.css"
import arrow_right from "../../assets/images/arrow_right.svg"

const WhyBox = ({title , description}) => {
  return (
   <Stack width={{xs:"100%" , sm:"75%" ,md:"25%"}}  alignItems="flex-start" spacing={3}>
    
        <p className={styles["title"]}>{title}</p>
   
  
        <p className={styles["description"]}>{description}</p>
    
      <Stack width="100%" direction="row" alignItems="center" gap={1}  sx={{cursor:"pointer"}}>
     <p className={styles["more"]}>More</p>
     <Box component="img" maxWidth="60px" src={arrow_right} />
      </Stack>
   </Stack>
  )
}

export default WhyBox