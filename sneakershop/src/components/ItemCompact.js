import React from "react";
import { Link } from "react-router-dom";
import force from "../images/force.png";

export default function ItemCompact({ item }) {
  const { name, slug, price } = item;

  return (
    <Link className="item-compact" to={`/items/${slug}`}>
      <img className="compact-img" src={force}></img>
      <div className="compact-item-info">
        {" "}
        <h5>{name}</h5>
        <h6>{price}</h6>
      </div>
    </Link>
  );
}
