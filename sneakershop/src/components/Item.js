import React from "react";

import force from "../images/force.png";

import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, slug, price } = item;

  return (
    <Link className="item-art" to={`/items/${slug}`}>
      <img className="item-img" src={force} width="100%" />
      <h1>{name}</h1>
      <h2>{price}</h2>
    </Link>
  );
}
