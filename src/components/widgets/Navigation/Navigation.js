import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = ({ category, element }) => (
    <div className="header-navigation">
      {category &&
        <>
          <span className="nav-item">
            <Link to="/">Home</Link>
          <span className="nav-divider">/</span>
          </span>
          <span className="nav-item">
            <Link to={`/${category}`}>{category}</Link>
          </span>
        </>
      }
      {element &&
        <span className="nav-item">
          <span className="nav-divider">/</span>
          {element.name ? element.name : element.title}
        </span>
      }
    </div>
);

Navigation.propTypes = {
  category: PropTypes.string, // a string with a path like "/example/example"
  element: PropTypes.object // An object with the element
};

export default Navigation;
