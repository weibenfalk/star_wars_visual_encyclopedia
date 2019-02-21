import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const GridElement = ({ category, element: { id, img, name } }) => (
  <Link to={`/${category}/${id}`}>
    <div className="grid-element">
      <div
        className="grid-element-upper"
        style={{
          background: `url(${img})`
        }}
      />
      <div className="grid-element-lower">
        <p>{name}</p>
      </div>
    </div>
  </Link>
);

GridElement.propTypes = {
  element: PropTypes.object,
  category: PropTypes.string
};

export default GridElement;
