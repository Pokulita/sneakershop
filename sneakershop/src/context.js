import React, { Component } from "react";

import all_items from "./data";

const ItemContext = React.createContext();

export default class ItemProvider extends Component {
  state = {
    items: [],
    featuredItems: [],
    loading: true,
  };

  componentDidMount() {
    let items = this.formatData(all_items);
    let featuredItems = items.filter((item) => item.popular === true);
    this.setState({
      items,
      featuredItems: items,
      loading: false,
    });
  }

  formatData(all_items) {
    let tempItems = all_items.map((curr_item) => {
      let id = curr_item.sys.id;
      let item = { ...curr_item.fields, id };
      return item;
    });
    return tempItems;
  }

  render() {
    return (
      <ItemContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ItemContext.Provider>
    );
  }
}

const ItemConsumer = ItemContext.Consumer;

export { ItemProvider, ItemConsumer, ItemContext };
