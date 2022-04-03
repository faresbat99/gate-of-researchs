import React, { useState } from "react";
import { FloatingLabel, Form, Row, Col, Button } from "react-bootstrap";
import "./../../App.css";
import Footer from "../Footer";
import { Viewer } from "@react-pdf-viewer/core"; // install this library
// Plugins
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"; // install this library
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

const AddResearch = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const [section, setSection] = useState();
  const [file, setFile] = useState();

  async function addResearch() {
    console.warn(name, description, section, file);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("section", section);
    formData.append("file", file);
    let result = await fetch("http://localhost:8000/api/addResearch", {
      method: "POST",
      body: formData,
    });

    // alert("data has been saved");
  }
  // validation using bootstrap
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  // pdf events
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);
  // onchange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("select your file");
    }
  };
  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  return (
    <React.Fragment>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
            Add Your Research
          </h1>
          <FloatingLabel label="Title name">
            <Form.Control
              type="text"
              placeholder="Title"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <br />
            <FloatingLabel label="Section">
              <Form.Control
                type="text"
                placeholder="Section"
                onChange={(e) => setSection(e.target.value)}
                required
              />
            </FloatingLabel>

            <br />
            <FloatingLabel label="Description">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
                onChange={(e) => setDescription(e.target.value)}
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
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </Form.Group>
              <br />
            </Col>
          </Row>
          <Form className="form-group" onSubmit={handlePdfFileSubmit}>
            <Row>
              <Col xs={9}>
                {/* <input
                className="form-control"
                type="file"
                // onChange={(e)=>}
                placeholder="file"
                 //notes that we change value to file
              /> */}

                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>
                    <h5
                      style={{
                        color: "#fff",
                        fontWeight: "bolder",
                        fontFamily: "monospace",
                        backgroundColor: "black",
                      }}
                    >
                      Choose your research
                    </h5>
                  </Form.Label>
                  <Form.Control
                    required
                    type="file"
                    // onChange={(e) => setFile(e.target.files[0])}
                    onChange={handlePdfFileChange}
                  />
                  {/* pdf file error  */}
                  {pdfFileError && (
                    <div className="error-msg">{pdfFileError}</div>
                  )}
                </Form.Group>
              </Col>
              <Col>
                <Form.Label>
                  <h5
                    style={{
                      color: "#fff",
                      fontWeight: "bolder",
                      fontFamily: "monospace",
                      backgroundColor: "black",
                    }}
                  >
                    pdf only
                  </h5>
                </Form.Label>
                <Button type="submit">UPLOAD</Button>
              </Col>
            </Row>
          </Form>

          <h1
            style={{
              color: "#fff",
              fontFamily: "monospace",
              padding: "20px",
              fontWeight: "bold",
            }}
          >
            View PDF
          </h1>
          <div className="viewer">

        {/* render this if we have a pdf file */}
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile}
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>No file is selected yet</>}

      </div>

          <div className="button-btn">
            <button
              type="submit"
              onClick={addResearch}
              className="btn btn-light"
            >
              Add your Research{" "}
            </button>
          </div>
        </div>
      </Form>
      <Footer />
    </React.Fragment>
  );
};

export default AddResearch;
