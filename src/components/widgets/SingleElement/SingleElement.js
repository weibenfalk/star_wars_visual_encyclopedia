import React from 'react';
import './SingleElement.css';

const SingleElement = (props) => {

  const showAttributes = () => {
    // Filter out the arrays with related stuff. Keep the string attributes. Also filter out the unrelated stuff.
    const objectKeys = Object.keys(props.element)
    .filter( key => (typeof props.element[key]) === "string" && (key !== "created") && (key !== "edited") && (key !== "url") && (key !== "homeworld"));

    return objectKeys.map( (element, i) => {
      return (
        <p key={i}><span className="info-property">{element}</span><br />{props.element[element]}</p>
      )
    })
  }

  return (
    <div className="single-element-wrapper">
      <div className="single-element-image"
        style={{
          background: `url('/sw_lexicon/images/${props.category}/${props.id}.jpg')`
        }}
        ></div>
        <div className="single-element-info">
            {(props.loading && props.element === null) ? <div className="loader" style={{ marginTop: 60 }}></div> : null }
            {(props.element !== null) ? showAttributes() : null}
        </div>
    </div>
  )
}

export default SingleElement;