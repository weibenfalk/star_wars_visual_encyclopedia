import React from "react";
import PropTypes from "prop-types";
import "./Grid.css";

import GridElement from "./GridElement";
import LoadMoreButton from "../../widgets/LoadMoreButton/LoadMoreButton";

const Grid = ({ elements, loadMorecallback, category, nextPage, loading }) => {
  const renderElements = () => {
    return elements.map((element, i) => {
      const id = element.url.split("/")[5];
      const gridObject = {
        id,
        name: category !== "films" ? element.name : element.title,
        img: `/images/${category}/${id}.jpg`
      };
      return <GridElement key={i} element={gridObject} category={category} />;
    });
  };

  return (
    <>
      <div className="grid-wrapper">{renderElements()}</div>
      {loading ? <div className="loader" /> : null}
      {nextPage && elements.length !== 0 ? (
        <LoadMoreButton clickCallback={loadMorecallback} />
      ) : null}
    </>
  );
};

Grid.propTypes = {
  elements: PropTypes.array,
  loadMorecallback: PropTypes.func,
  category: PropTypes.string,
  nextPage: PropTypes.string,
  loading: PropTypes.bool
};

export default Grid;
