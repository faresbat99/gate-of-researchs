import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "./../CardItem";
import "../Cards.css";
import Footer from "./../Footer";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import { Button } from "./../Button";
import "./../HeroSection.css";

function Products() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/list"); //list from backend
    result = await result.json();
    setData(result);
  }, []);
  async function search(key) {
    //  console.warn(key) in console
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    //  console.warn(result) show all related to it
    setData(result);
  }
  console.warn("result", data);
  return (
    <React.Fragment>
      <div className="cards">
        <div className="hero-btns">
          <h1
            style={{
              fontFamily: "monospace",
              fontWeight: "bold",
              padding: "10px",
              margin: "10px",
            }}
          >
            Search for whatever you want{" "}
          </h1>
          <Container>
            <Row>
              <Col></Col>
              <Col xs={7}>
                <div className="productClass">
                  <Form className="d-md-flex">
                    <FormControl
                      type="Search"
                      placeholder="Search"
                      className="me-3"
                      onChange={(e) => search(e.target.value)}
                    />
                    <Button
                      className="btns"
                      buttonStyle="btn--primary"
                      buttonSize="btn--large"
                    >
                      Search
                    </Button>
                  </Form>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </div>

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
            <div className="product_position">
            <ul className="cards__items">
              {data.map((item) => (
                <CardItem
                  src={"http://localhost:8000/" + item.file_path}
                  text={item.name}
                  label={item.section}
                  path={"http://localhost:8000/" + item.pdf_file}
                />
              ))}
            </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
export default Products;
