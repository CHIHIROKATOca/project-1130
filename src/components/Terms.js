import React from "react";
import "./Terms.css";

function termsduction() {
  return (
    <div className="terms">
      <h1>Terms of Service</h1>
      <div className="terms__container">
        <div className="terms__wrapper">
          <section className="terms__section">
            <img src="./images/cc.png" className="icon" />
            <h2>Copyright</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
          </section>
          <section className="terms__section">
            <img src="./images/pd.png" className="icon" />
            <h2>Public Domain</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
          </section>
          <section className="terms__section">
            <img src="./images/co.png" className="icon" />
            <h2>Creative Commons</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
export default termsduction;
