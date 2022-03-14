import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "./../CardItem";
import "../Cards.css";
import Footer from "./../Footer";

function Products() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/list"); //list from backend
    result = await result.json();
    setData(result);
  }, []);
  console.warn("result", data);
  return (
    <React.Fragment>
      <div className="cards">
        <h1>Check out these magnificient researchs</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            {/* <ul className="cards__items">
              {data.map((item) => (
                <ul>
                  <CardItem
                    src=
                    text=
                    label=
                    path=
                  />
                </ul>
              ))}
            </ul> */}
            <ul className="cards__items">
              {data.map((item) => (
                <CardItem
                  src={"http://localhost:8000/" + item.file_path}
                  text={item.name}
                  label={item.section}
                  path="/products"
                />
              ))}
              <CardItem
              src="images/react.png"
              text="How to make Fullstack by using react"
              label="Web"
              path="/services"
            />  
            </ul>
            <ul className="cards__items">
            <CardItem
              src="images/numerical-analysis.jpeg"
              text="Numerical Analysis"
              label="Mathimatics"
              path="/services"
            />
            <CardItem
              src="images/magic square.png"
              text="Magic Square"
              label="Mathimatics"
              path="/products"
            />
            <CardItem
              src="images/ai.jpeg"
              text="introduction on Artificial Intelligent and How to use it "
              label="Computer Science"
              path="/sign-up"
            />
          </ul>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Products;
