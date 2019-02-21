import React from "react";

const Home = ({ renderCategoryWidgets }) => (
  <div className="wrapper">
    <div className="header">
      <div
        className="logo"
        style={{
          background: "url(/images/sw_logo.svg)"
        }}
      />
      <div className="header-text">
        <div>
          <h2>Lexicon</h2>
          <p>Episode IV - VII</p>
        </div>
      </div>
    </div>
    <div className="content">{renderCategoryWidgets()}</div>
  </div>
);

export default Home;