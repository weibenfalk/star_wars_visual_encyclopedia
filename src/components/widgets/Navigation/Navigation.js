import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';

const Navigation = (props) => {

  const getHistory = () => {

    let history = '';
    let home = <span className="nav-item">
                 <Link to="/">Home</Link>
                 <span className="nav-divider">/</span>
               </span>;
    let category = '';
    let title = '';

    if (props.category) {
      category = <span className="nav-item">
                   <Link to={`/${props.category}`}>{props.category}</Link>
                 </span>;

      history = <span>{home}{category}</span>
    }

    if (props.element) {
      title = <span className="nav-item">
                <span className="nav-divider">/</span>
                {props.element.name ? props.element.name : props.element.title}
              </span>;

      history = <span>{home}{category}{title}</span>
    }
    return history;
  }

  return (
    <div className="header-navigation">
      {getHistory()}
    </div>
  )
}

Navigation.propTypes = {
  category: PropTypes.string, // a string with a path like "/example/example"
  element: PropTypes.object // An object with the element
}

export default Navigation;