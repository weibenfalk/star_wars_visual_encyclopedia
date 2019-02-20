import React from 'react';
import Navigation from '../widgets/Navigation/Navigation';
import SingleElement from '../widgets/SingleElement/SingleElement';
import Grid from '../widgets/Grid/Grid';

const SinglePage = ({ category, element, id, loading, categories, related }) => (

  <div className="wrapper-category">
    <div className="header-category">
      <div
        className="category-logo"
        style={{
          background: "url(/sw_lexicon/images/sw_logo.svg)"
        }}
      />
      <Navigation
        category={category}
        element={element}
      />
    </div>
    <SingleElement
      element={element}
      category={category}
      id={id}
      loading={loading}
    />

    {loading && element !== null ? (
      <div className="loader" />
    ) : null}

    {categories.map((element, i) => {
      if (
        related.hasOwnProperty(element) &&
        related[element].length > 0
      ) {
        return (
          <div key={i}>
            <div className="related-header-wrapper">
              <h2>Related {element}</h2>
            </div>
            <div className="category-grid">
              <Grid
                elements={related[element]}
                category={
                  element === "characters" ||
                  (element === "pilots" || element === "residents")
                    ? "people"
                    : element
                } // The endpoint has "people" in the URL
                loading={loading}
              />
            </div>
          </div>
        );
      } else {
        return null;
      }
    })}
  </div>
);

export default SinglePage;