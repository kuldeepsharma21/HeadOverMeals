import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Cruisine() {
  const [cruisine, setCrusine] = useState([]);

  let params = useParams();

  const getCruisine = async (name) => {
    const data = await fetch(`http://127.0.0.1:8000/blogs/?cuisine=${params.type}`);
    const recipes = await data.json();
    setCrusine(recipes);
  };

  useEffect(() => {
    getCruisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return <Grid>
      {cruisine.map((item)=>{
          return(
              <Card key={item.id} className="cruisine">
                  <img src={item.image} alt="" height="250px" />
                  <h4>{item.title}</h4>
              </Card>
          )
      })}
  </Grid>;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`

  img {
    width: 360px;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cruisine;
