import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const image = (props.image)
    ? <img src={props.image} className="card-img-top" />
    : null;

  const title = (props.title)
    ? <h5 className="card-title">{props.title}</h5>
    : null;

  return (
    <div className="card">
      {image}
      <div className="card-body">
        {title}
        {props.children}
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;

