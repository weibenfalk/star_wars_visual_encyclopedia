import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

import GridElement from './GridElement';
import LoadMoreButton from '../../widgets/LoadMoreButton/LoadMoreButton';

const Grid = (props) => {

  const renderElements = () => {
    return props.elements.map( (element, i) => {
      const id = element.url.split("/");
      const gridobject = { name: (props.category !== "films") ? element.name : element.title,
                            id: id[id.length - 2],
                            img: `/sw_lexicon/images/${props.category}/${id[id.length - 2]}.jpg`
                          }
      return <GridElement key={i} element={gridobject} category={props.category} />
    })
  }

    return (
      <div>
        <div className="grid-wrapper">
          {renderElements()}
        </div>
        {props.loading ? <div className="loader"></div> : null }
        {(props.nextPage && props.elements.length !== 0) ? <LoadMoreButton clickCallback={props.loadMorecallback} /> : null}
      </div>
    )
}

Grid.propTypes = {
  elements: PropTypes.array,
  loadMorecallback: PropTypes.func,
  category: PropTypes.string,
  nextPage: PropTypes.string,
  loading: PropTypes.bool
}

export default Grid;