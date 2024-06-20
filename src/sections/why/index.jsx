import styles from "./Why.module.css"
import { Stack } from "@mui/material";
import WhyBox from "../../components/why-box";

const Why = () => {
  return (
    <div className={styles["why-container"]}>
      <div className="container">
          
       
     
          <Stack flexWrap="wrap" width="100%" gap={3} direction="row" justifyContent="space-between" alignItems="center">
          <h3  className={styles["why"]}>Why<br/> Choosing Us</h3>
            <WhyBox title="Luxury facilities" description="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities." />
            <WhyBox title="Affordable Price" description="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."/>
            <WhyBox title="Many Choices" description="We provide many unique work space choices so that you can choose the workspace to your liking."/>
          </Stack>
     
      </div>
    </div>
  );
};

export default Why;
