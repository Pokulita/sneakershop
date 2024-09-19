import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ItemContext } from "../context";

function ItemWrapper(props) {
  const { slug } = useParams();
  return <Item {...props} slug={slug} />;
}

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.slug,
    };
  }

  static contextType = ItemContext;

  render() {
    const { getItem } = this.context;
    const item = getItem(this.state.slug);

    if (!item) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link to="/items" className="btn-primary">
            back to items
          </Link>
        </div>
      );
    }

    const { name } = item;

    return (
      <>
        <h1>{name}</h1>
      </>
    );
  }
}

export { ItemWrapper };
