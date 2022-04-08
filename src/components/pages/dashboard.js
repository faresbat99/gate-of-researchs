import React, { useEffect, useState } from "react";
import "../../App.css";

import Footer from "./../Footer";
import { Table } from "react-bootstrap";

function Dashboard() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    let result = await fetch("http://localhost:8000/api/list"); //list from backend
    result = await result.json();
    setData(result);
  }, []);
 
  
  console.warn("result", data);
  return (
    <React.Fragment>
         <h1 style={{fontWeight:"bold",fontSize:"50px",color:"#fff",fontFamily:"cursive",padding:"25px"}}>product list</h1>
     <Table size="sm" striped bordered hover variant="dark" >
  <thead >
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Section</th>
      <th>Description</th>
      <th>Image</th>
      <th>pdf link</th>

    </tr>
  </thead>
  <tbody>
      
  {data.map((item)=>(
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.section}</td>
      <td>{item.description}</td>
      <td><img style={{width:"100px"}} src={"http://localhost:8000/" + item.file_path} /></td>
      <td><a style={{width:"100px"}} href={"http://localhost:8000/" + item.pdf_file}target="_blank" rel="noopener noreferrer">download pdf</a></td>
     
    </tr>
      ))}

  </tbody>
</Table>
      <Footer />
    </React.Fragment>
  );
}
export default Dashboard;
