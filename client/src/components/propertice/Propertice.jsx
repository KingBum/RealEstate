import React, { useEffect, useState } from "react";
import TitleCom from "../shared/TitleCom";
import "./propertice.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios"

export default function Propertice() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const [products, setProducts] = useState([])
  let randomNumber = Array.from({length: 12}, () => Math.floor(Math.random() * 12))
  
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get("/products/")
      setProducts(res.data)
    }
    fetchProduct()
  }, [])

  return (
    <div className="propertice">
      <div className="wrapperPropertice">
        <TitleCom
          title="Propertice by Area"
          subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
        />
        <div>
          <Box sx={{ flexGrow: 1 }} className="gridImage">
            <Grid container spacing={2}>
              <Grid className="proItem" xs={4}>
                <span className="tagCity">{products[randomNumber[0]]?.city}</span>
                <img className="imgPropertice" src={PF + products[randomNumber[0]]?.img} alt="" />
              </Grid>
              <Grid className="proItem" xs={4}>
                <span className="tagCity">{products[randomNumber[1]]?.city}</span>
                <img className="imgPropertice" src={PF + products[randomNumber[1]]?.img} alt="" />
              </Grid>
              <Grid className="proItem" xs={4}>
                <span className="tagCity">{products[randomNumber[2]]?.city}</span>
                <img className="imgPropertice" src={PF + products[randomNumber[2]]?.img} alt="" />
              </Grid>
              <Grid className="proItem" xs={8}>
                <span className="tagCity">{products[randomNumber[3]]?.city}</span>
                <img className="imgPropertice" src={PF + products[randomNumber[3]]?.img} alt="" />
              </Grid>
              <Grid className="proItem" xs={4}>
                <span className="tagCity">{products[randomNumber[4]]?.city}</span>
                <img className="imgPropertice" src={PF + products[randomNumber[4]]?.img} alt="" />
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
}
