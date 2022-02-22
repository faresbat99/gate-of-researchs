import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function about() {
  return (
    <>
    <div
      className="aboutUs-container"
      style={{backgroundColor: "black"}}
    >
      <section className="about-gate-research">
        <h1 className="about-heading">Research Gate project</h1>
     
      <div className="about-text">
        <p>
          “The Research Gate” is a non-profit organization that seeks to make a
          significant impact in the world of knowledge. The Foundation began its
          activity by focusing on translation as a bridge of communication with
          the other, and a crossing point for the transfer of all sciences and
          knowledge. The Foundation is also working on creating the largest
          library that includes the most important research papers related to
          hadith after their reproduction With the rapid global development
          witnessed by technological means, it became clear the inevitability of
          opening new horizons for the dissemination of knowledge and culture in
          all modern forms; In addition to paper printing, the Foundation
          publishes valuable research from what has been written or translated
          to it in various scientific fields, and others in electronic images,
          to make it available free of charge on its website.
        </p>
      </div>
      </section>
     
    </div>
    <Footer />
    </>
  );
     
}
