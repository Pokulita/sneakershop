import React from "react";

import { Link } from "react-router-dom";

export default function Item({ item }) {
  const { name, slug } = item;

  return (
    <Link className="item-art" to={`/items/${slug}`}>
      <article className="item">{name}</article>
    </Link>
  );
}
