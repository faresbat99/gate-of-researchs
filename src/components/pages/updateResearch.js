import React, { useEffect, useState } from "react";
import { Col, FloatingLabel, Form, Row } from "react-bootstrap";
function UpdateResearch(props) {
  const [data, setData] = useState([]);
  console.warn("props", props.match.params.id);
  useEffect(async () => {
    let result = await fetch(
      "http://localhost:8000/api/product/" + props.match.params.id
    );
    result = await result.json();
    setData(result);
  });

  return (
    <React.Fragment>
      <Form>
        <div className="col-sm-6 offset-sm-3" style={{ padding: "50px" }}>
          <br />
          <h1
            style={{
              color: "#fff",
              fontFamily: "monospace",
              padding: "20px",
              fontWeight: "bold",
            }}
          >
            Update Your Research
          </h1>
          <FloatingLabel label="Title name">
            <Form.Control
              type="text"
              placeholder="Title"
              defaultValue={data.name}
              required
            />
            <br />
            <FloatingLabel label="Section">
              <Form.Control
                type="text"
                placeholder="Section"
                defaultValue={data.section}
                required
              />
            </FloatingLabel>

            <br />
            <FloatingLabel label="Description">
              <Form.Control
                as="textarea"
                defaultValue={data.description}
                style={{ height: "100px" }}
              />
            </FloatingLabel>
          </FloatingLabel>
          <br />

          <Row>
            <Col xs={12}>
              {/* <input
                className="form-control"
                type="file"
                // onChange={(e)=>}
                placeholder="file"
                onChange={(e) => setFile(e.target.files[0])} //notes that we change value to file
              /> */}
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>
                  <h5
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                    }}
                  >
                    Choose photo
                  </h5>
                </Form.Label>
                <Form.Control type="file" defaultValue={data.file_path} required />
                <img
                    style={{ width: "20em",height: "20em" ,margin:"25px" ,alignItems:"center"}}
                    src={"http://localhost:8000/" + data.file_path}
                  />
              </Form.Group>
              <br />
            </Col>
          </Row>
        </div>
        <div className="button-btn">
            <button
              type="submit"
              className="btn btn-light"
            >
              update now
            </button>
          </div>
      </Form>
    </React.Fragment>
  );
}

export default UpdateResearch;
