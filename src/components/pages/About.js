import React from "react";
import "../../App.css";
import Footer from "../Footer";

export default function about() {
  return (
    <React.Fragment>
      <div class="stars"></div>
      <div className="aboutUs-container">
        <section className="about-gate-research">
          <h1 className="about-heading">About Us</h1>

          <div className="about-text">
            <p>
              “The Research Gate” is a non-profit organization that seeks to
              make a significant impact in the world of knowledge. The
              Foundation began its activity by focusing on translation as a
              bridge of communication with the other, and a crossing point for
              the transfer of all sciences and knowledge. The Foundation is also
              working on creating the largest library that includes the most
              important research papers related to hadith after their
              reproduction With the rapid global development witnessed by
              technological means, it became clear the inevitability of opening
              new horizons for the dissemination of knowledge and culture in all
              modern forms In addition to paper printing, the Foundation
              publishes valuable research from what has been written or
              translated to it in various scientific fields, and others in
              electronic images, to make it available free of charge on its
              website.
            </p>
          </div>
          <section className="About-Us">
            
            <div>
              <h1>Our message</h1>
              <p>
                <ul>
                  <li>
                    Choose a variety of sources of applied mathematics knowledge
                    and recent patents in computer science
                  </li>
                  <li>Availability and accessibility of these resources.</li>
                </ul>
              </p>
            </div>
            <div>
              <h1>Our goals</h1>
              <p>
                Our message Choose a variety of sources of knowledge in applied
                mathematics and recent patents in computer science Availability
                and accessibility of these resources.
              </p>
            </div>
            <div>
              <h1>Core values</h1>
              <p>
                <ul>
                  <li>Discrimination.</li>
                  <li>The ease.</li>
                  <li>Innovation.</li>
                </ul>
              </p>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  );
}
