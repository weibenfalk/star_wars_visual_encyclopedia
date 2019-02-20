import React from "react";
import PropTypes from "prop-types";
import "./LoadMoreButton.css";

const LoadMoreButton = ({ clickCallback }) => (
  <div className="load-more-button" onClick={() => clickCallback(true)}>
    <p>Load more</p>
  </div>
);

LoadMoreButton.propTypes = {
  clickCallBack: PropTypes.func
};

export default LoadMoreButton;
