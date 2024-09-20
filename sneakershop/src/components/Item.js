import React from "react";

import force from "../images/force.png";

import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, slug } = item;

  return (
    <Link className="item-art" to={`/items/${slug}`}>
      <img src={force} width="100%" />
    </Link>
  );
}
