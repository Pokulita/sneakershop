import React, { Component } from "react";

import "../App.css";

import { ItemContext } from "../context";
import Loading from "./Loading";

import ItemCompact from "./ItemCompact";

export default class FeaturedItems extends Component {
  static contextType = ItemContext;
  render() {
    let { loading, featuredItems: items } = this.context;

    items = items.map((item) => {
      return <ItemCompact key={item.id} item={item} />;
    });

    return (
      <section>
        <div />
        <h1>Popular models</h1>
        <div>{loading ? <Loading /> : items}</div>
      </section>
    );
  }
}
