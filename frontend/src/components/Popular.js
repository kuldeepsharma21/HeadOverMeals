import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const api = await fetch(`http://127.0.0.1:8000/blogs/?category=NonVeg`);
    const data = await api.json();
    setVeggie(data);
  };
  return (
    <div>
      <Wrapper>
        <h3>Non - Vegetarian Picks</h3>

        <Splide
          options={{
            perPage: 3,
            arrows: true,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((data) => {
            return (
              <SplideSlide key={data.id}>
                <Card>
                  <p>{data.title}</p>

                  <img src={data.image} alt={data.title} height="300px" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  // position:relative:

  img{
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%:
    object-fit:cover;
  }

  p{
    position:absolute;
    z-index:10;
    
    bottom:0%;
    
    color: black;
    width: 100%;
    font-weight:600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-item: center;
    text-align: center;
  };

`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  backgrounf: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
