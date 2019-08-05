import React, {Component} from 'react';
import '../stylesheets/Card.css'

function Card (props) {
  return (
    <article className="Card">
      <img src={props.image} alt=""/>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </article>
  )
}

export default Card;

