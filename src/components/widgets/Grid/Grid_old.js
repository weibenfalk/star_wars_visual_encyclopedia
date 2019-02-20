import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

import GridElement from './GridElement';
import LoadMoreButton from '../../widgets/LoadMoreButton/LoadMoreButton';

class Grid extends Component {

  renderElements = () => {
    return this.props.elements.map( (element, i) => {
      const id = element.url.split("/");
      const gridobject = { name: (this.props.category !== "films") ? element.name : element.title,
                            id: id[id.length - 2],
                            img: `/images/${this.props.category}/${id[id.length - 2]}.jpg`
                          }
      return <GridElement key={i} element={gridobject} category={this.props.category} />
    })
  }

  render() {
    return (
      <div>
        <div className="grid-wrapper">
          {this.renderElements()}
        </div>
        {this.props.loading ? "loading" :
        <button onClick={() => this.props.loadMorecallback()}>sfkfdsj</button>
    }
        {this.props.nextPage ? <LoadMoreButton onClick={this.props.loadMorecallback} /> : null}
      </div>
    )
  }
}

Grid.propTypes = {
  elements: PropTypes.array,
  loadMorecallback: PropTypes.func,
  clickCallback: PropTypes.func,
  itemsOnEachLoad: PropTypes.number,
  category: PropTypes.string,
  nextPage: PropTypes.string
}

export default Grid;