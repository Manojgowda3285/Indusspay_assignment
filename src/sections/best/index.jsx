import {  Box, Stack } from "@mui/material";
import styles from "./Best.module.css";
import { useRef, useState } from "react";
import ProductInfo from "../../components/product-info";
import Slider from "react-slick";
import SimpleSlider from "../../components/Slider";
import chair_1 from "../../assets/images/chair_1.svg"

const Best = () => {
  const [active, setActive] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    
  
    <div className={styles["best-container"]}>
      <div className="container">
        <Stack
          spacing={4}
          width="100%"
          justifyContent="center"
          alignItems="center"
        >
          <h3 className={styles["best"]}>Best Selling Product</h3>

          <div className={styles["product-wrapper"]}>
            {["Chair", "Beds", "Sofa", "Lamp"].map((data, index) => (
              <div
                onClick={() => setActive(index)}
                className={`${styles["product"]} ${
                  active === index && styles["product_active"]
                }`}
              >
                <p className={styles["product_name"]}>{data}</p>
              </div>
            ))}
          </div>

          

          
        
        </Stack>
        <Box className={styles["slick-container"]}>
      <Slider ref={sliderRef} {...settings}>
      {["Chair", "Beds", "Sofa", "Lamp","Chair", "Beds", "Sofa", "Lamp","Chair", "Beds", "Sofa", "Lamp"].map((data, index)=>(
          <div className={styles["card-item"]}>

<ProductInfo title="Sakarias Armchair" amount={999}/>
            </div>
          ))}
       
      </Slider>
    </Box>
      </div>
    </div>
  );
};

export default Best;



