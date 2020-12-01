import React from "react";
import "./Introduction.css";

function Introduction() {
  return (
    <div className="intro">
      <h1>Concept</h1>
      <div className="intro__container">
        <div className="intro__wrapper">
          <img src="images/img-2.jpg" />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
          </p>
        </div>
      </div>
    </div>
  );
}
export default Introduction;
