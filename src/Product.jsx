/** @format */

import React, { Component } from "react";

class Product extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "burger",
    count: 5 ,
    imgUrl: "../public/favicon.ico"
  };

  IncrmentHandler = ()=> {
    this.setState({
      count: this.state.count +1,
    })
    console.log(this.state.count);
  }

  incerement = () =>
  { 
    this.IncrmentHandler(2)
  }
  
  render() {
    const styles = {
      color: "red",
      fontSize: "24px"
    };
    return (
      <div>
        <img src={this.state.imgUrl} alt="" />
        <span>Name</span>

        <span styles={styles}>{this.state.name}</span>
        <span className="count">{this.state.count}</span>
        <button onClick={this.incerement} className="btn btn-primary btn-sm">
          +
        </button>
      </div>
    );
  }
}
export default Product;
