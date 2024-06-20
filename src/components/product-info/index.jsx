import styles from "./ProductInfo.module.css";
import chair_1 from "../../assets/images/chair_1.svg"; 
import { Box, Stack } from "@mui/material";
import { Star } from "@mui/icons-material";
import product_add from "../../assets/images/product_add.svg";

const ProductInfo = ({ title, amount }) => {
  return (
    <div className={styles["info-container"]}>
      <div
        className={styles["image_container"]}
        style={{
          background: `url(${chair_1}) #F7F7F7 -19.003px 0px / 117.442% 100% no-repeat`,
        }}
      />

  

      <Stack sx={{ background: "#FFF" }} spacing={1} padding="20px"> 
        <p className={styles["sub_title"]}>Chair</p>
        <h3 className={styles["title"]}>{title}</h3>
        <Stack direction="row" gap={0.5} alignItems="center">
          {["1", "2", "3", "4", "5"].map(() => (
            <Star sx={{ color: "#F6B76F" }} />
          ))}
        </Stack>

        <Stack
          direction="row"
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <h5 className={styles["amount"]}>{`$ ${amount}`}</h5>
          <Box component="img" maxWidth="50px" src={product_add} />
        </Stack>
      </Stack>
    </div>
  );
};

export default ProductInfo;
