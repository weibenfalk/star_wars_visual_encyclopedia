import React from "react";
import Navigation from '../widgets/Navigation/Navigation';
import SearchForm from '../widgets/SearchForm/SearchForm';
import Grid from '../widgets/Grid/Grid';

const Category = ({ navCategory, updateItems, loading, elements, nextPage, category }) => (
  <div className="wrapper-category">
    <div className="header-category">
      <div
        className="category-logo"
        style={{
          background: "url(./images/sw_logo.svg)"
        }}
      />
      <Navigation category={navCategory} />
    </div>
    <SearchForm callback={updateItems} loading={loading} />

    <div className="category-grid">
      <Grid
        elements={elements}
        nextPage={nextPage}
        loadMorecallback={updateItems}
        category={category}
        loading={loading}
      />
    </div>
  </div>
);

export default Category;
