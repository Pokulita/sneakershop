import React, { Component } from "react";

import "../App.css";

import { ItemContext } from "../context";
import Loading from "./Loading";

import Item from "./Item";

export default class AllItems extends Component {
  static contextType = ItemContext;
  render() {
    let { loading, items: items } = this.context;

    items = items.map((item) => {
      return <Item key={item.id} item={item} />;
    });

    return (
      <section className="featured-rooms">
        <h1 className="popular">Our Selection</h1>
        <div className="all-items-divider" />

        <div className="popular-items-center">
          {loading ? <Loading /> : items}
        </div>
      </section>
    );
  }
}
