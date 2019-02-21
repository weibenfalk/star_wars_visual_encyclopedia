import React from "react";
import "./SingleElement.css";

const SingleElement = ({ element, category, id, loading }) => {
  const showAttributes = () => {
    // Filter out the arrays with related stuff. Keep the string attributes. Also filter out the unrelated stuff.
    return Object.keys(element)
      .filter(
        key =>
          typeof element[key] === "string" &&
          key !== "created" &&
          key !== "edited" &&
          key !== "url" &&
          key !== "homeworld"
      )
      .map((attribute, i) => (
          <div key={i}>
            <p className="info-property">{attribute}: </p>
            <p>{element[attribute]}</p>
          </div>
      ));
  };

  return (
    <div className="single-element-wrapper">
      <div
        className="single-element-image"
        style={{
          background: `url('/sw_lexicon/images/${category}/${id}.jpg')`
        }}
      />
      <div className="single-element-info">
        {loading && element === null ? (
          <div className="loader" style={{ marginTop: 60 }} />
        ) : null}
        {element !== null ? showAttributes() : null}
      </div>
    </div>
  );
};

export default SingleElement;
