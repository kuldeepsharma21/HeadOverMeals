import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'




function Searched() {
  const [Searched, setSearched] = useState([]);
  let params = useParams();
  const getSearched = async (name) => {
    const data = await fetch(
      `http://127.0.0.1:8000/veggie/query=${name}`
    );
    const recipes = await data.json();
    setSearched(recipes);
  };
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);


  return 
    <Grid>
      {Searched.map((item) => {
        return (
          <Card>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
}
  


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`

  img {
    width: auto;
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
export default Searched;
