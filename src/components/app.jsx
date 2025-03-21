/** @format */

import React, { Component } from "react";
import NavBar from "./navBar";
import ShoppingCart from "./shoppingCart";

class App extends Component {
  state = {
    products: [
      { id: 1, name: "Burger", count: 0 },
      { id: 2, name: "Fries", count: 0 },
      { id: 3, name: "Cola", count: 0 }
    ]
  };



  handleReset = () => {
    //Clone
    let products = [...this.state.products];
    //Edit
    products = products.map((p) => {
      p.count = 0;
      return p;
    });
    //Set state
    this.setState({ products });
  };




  IncrementHandler = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].count++;
    //Set State
    this.setState({ products });
  };





  handleDelete = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    //Edit
    products.splice(index, 1);
    //Set State
    this.setState({ products });
  };




  render() {
    return (
      <React.Fragment>
        <NavBar productsCount={this.state.products.filter((p) => p.isInCart).length} />
        
        <main className="container">
          
          <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
