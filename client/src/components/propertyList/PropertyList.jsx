import React from "react";
import CardItem from "../shared/CardItem";
import TitleCom from "../shared/TitleCom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./propertyList.css";
import axios from "axios"
import { useEffect, useState } from "react";


export default function PropertyList() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  const [posts, setPosts] = useState([])
  const [visible, setVisible] = useState(6)

  const handleClick = () => {
    setVisible((prev) => prev + 3)
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/products/")
      setPosts(res.data.sort((p1,p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchPosts()
  }, [])

  return (
    <div className="propertyList">
      <div className="wrapperPropertyList">
        <TitleCom
          title="Letest Properties of Rent"
          subtitle="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."
        />
        <div className="listCardItem">
          <Box sx={{ flexGrow: 1 }} className="gridImage">
            <Grid container spacing={2}>
              {posts.slice(0,visible).map((p,index) => (
                <Grid xs={4} key={index}>
                  <CardItem
                  avatar={p.owner.avatar}
                  owner={p.owner.username}
                  price={p.price}
                  title={p.title}
                  image={PF + p.img}
                  />
              </Grid>
              ))}
            </Grid>
          </Box>
        </div>
        <button className="btn button" onClick={handleClick}>Load more listing</button>
      </div>
    </div>
  );
}
