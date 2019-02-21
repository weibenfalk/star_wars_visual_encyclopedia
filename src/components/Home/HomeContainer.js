import React from "react";
import CategoryWidget from "../widgets/CategoryWidget/CategoryWidget";
import Home from './Home';
import "./Home.css";

const HomeContainer = () => {
  const categories = [
    "films",
    "people",
    "planets",
    "starships",
    "vehicles",
    "species"
  ];

  const renderCategoryWidgets = () => {
    return categories.map((cat, i) => (
      <CategoryWidget
        imageFilePath={`/images/categories/${cat}.png`}
        categoryTitle={cat}
        key={i}
      />
    ));
  };

  return <Home renderCategoryWidgets={renderCategoryWidgets} />
};

export default HomeContainer;
