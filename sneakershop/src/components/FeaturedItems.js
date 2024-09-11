import React, { Component } from "react";

import "../App.css";

import { ItemContext } from "../context";
import Loading from "./Loading";

import Item from "./Item";

export default class FeaturedItems extends Component {
  static contextType = ItemContext;
  render() {
    let { loading, featuredItems: items } = this.context;

    items = items.map((item) => {
      return <Item key={item.id} item={item} />;
    });

    return (
      <section className="featured-rooms">
        <div className="popular-divider" />
        <h1 className="popular">Popular</h1>
        <div className="popular-items-center">
          {loading ? <Loading /> : items}
        </div>
      </section>
    );
  }
}
