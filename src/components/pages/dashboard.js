import React, { useEffect, useState } from "react";
import "../../App.css";


import { Col, Container, Form, FormControl, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "./../Button";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  async function deleteOperation(id) {
    // alert(id) to make sure it target the purpose id
    let result = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    }); //method that used
    result = await result.json();
    console.warn(result);
    getdata();
  }
  async function getdata() {
    let result = await fetch("http://localhost:8000/api/list"); //list from backend
    result = await result.json();
    setData(result);
  }
  //search function
  async function search(key) {
    //  console.warn(key) in console
    let result = await fetch("http://localhost:8000/api/search/" + key);
    result = await result.json();
    //  console.warn(result) show all related to it
    setData(result);
  }

  return (
    <React.Fragment>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "50px",
          color: "#fff",
          fontFamily: "cursive",
          padding: "25px",
        }}
      >
        product list
      </h1>
      <div className="hero-btns" style={{ margin: "20px" }}>
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div className="productClass">
                <Form className="d-md-flex">
                  <FormControl
                    type="Search"
                    placeholder="Search"
                    className="me-3"
                    onChange={(e) => search(e.target.value)}
                    onClick={(e) => e.nativeEvent.stopPropagation()}
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
      <div className="col-sm-8 offset-sm-2">
        {/*offset like margin in css */}
        <Table size="sm" striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Section</th>
              <th>Description</th>
              <th>pdf link</th>
              <th>operations </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={"http://localhost:8000/" + item.file_path}
                    alt={"/public/images/img-1.jpg"}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.section}</td>
                <td>{item.description}</td>
                <td>
                  <a
                    className="download"
                    style={{ width: "100px" }}
                    href={"http://localhost:8000/" + item.pdf_file}
                    target="_blank"
                    rel="noopener noreferrer" // HTML attributes that can be added to outgoing links.
                  >
                    <i class="fa fa-download">download</i>
                  </a>
                </td>
                <td>
                  <span
                    className="delete"
                    onClick={() => deleteOperation(item.id)}
                  >
                    Delete
                  </span>
                </td>
                <td>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"Update/" + item.id}
                  >
                    <span
                      className="update"
                      // onClick={() => deleteOperation(item.id)}
                    >
                      Update
                    </span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </React.Fragment>
  );
}
export default Dashboard;
