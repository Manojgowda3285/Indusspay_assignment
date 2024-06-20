import { Stack } from "@mui/material"
import Hero from "../../sections/hero"
import Why from "../../sections/why"
import Best from "../../sections/best"
import SimpleSlider from "../../components/Slider"


const Home = () => {
  return (
    <div className="page-wrapper" >
   
   <Stack spacing={10}>
    <Hero/>
    <Why/>
    <Best/>
   </Stack>
   </div>
  )
}

export default Home