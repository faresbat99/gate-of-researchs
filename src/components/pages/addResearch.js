import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import "./../../App.css";
import Footer from "../Footer";

import { Button } from "./../Button";

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
    alert("data has been saved");
  }
  return (
    <React.Fragment>
      <div className="col-sm-6 offset-sm-3" style={{ padding: "50px" }}>
        <br />
        <h1 style={{ color: "#fff", padding: "20px", fontWeight: "bold" }}>
          Add Your Research
        </h1>
        <FloatingLabel label="Title name">
          <Form.Control
            type="text"
            placeholder="Title"
            onChange={(e) => setName(e.target.value)}
          />
        </FloatingLabel>
        <br />
        <input
          className="form-control"
          type="file"
          // onChange={(e)=>}
          placeholder="File"
          onChange={(e) => setFile(e.target.files[0])} //notes that we change value to file
        />
        <br />
        <FloatingLabel label="Section">
          <Form.Control
            type="text"
            placeholder="Section"
            onChange={(e) => setSection(e.target.value)}
          />
        </FloatingLabel>

        <br />
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FloatingLabel>

        <div className="button-btn">
          <Button
            onClick={addResearch}
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Add your Research{" "}
          </Button>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AddResearch;
