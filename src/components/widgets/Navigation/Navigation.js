import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navigation.css";

const Navigation = ({ category, element }) => {
  const test = "test";
  const getHistory = () => {
    let history = "";
    let cat = "";
    let title = "";
    let home = (
      <span className="nav-item">
        <Link to="/">Home</Link>
        <span className="nav-divider">/</span>
      </span>
    );

    if (category) {
      cat = (
        <span className="nav-item">
          <Link to={`/${category}`}>{category}</Link>
        </span>
      );

      history = (
        <span>
          {home}
          {cat}
        </span>
      );
    }

    if (element) {
      title = (
        <span className="nav-item">
          <span className="nav-divider">/</span>
          {element.name ? element.name : element.title}
        </span>
      );

      history = (
        <span>
          {home}
          {cat}
          {title}
        </span>
      );
    }
    return history;
  };

  return <div className="header-navigation">{getHistory()}</div>;
};

Navigation.propTypes = {
  category: PropTypes.string, // a string with a path like "/example/example"
  element: PropTypes.object // An object with the element
};

export default Navigation;
