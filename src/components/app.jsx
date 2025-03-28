/** @format */

import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navBar";
import ShoppingCart from "./shoppingCart";
import Home from "./home";
import ProductDetails from "./productDetails";
import NotFound from "./notFound";
import About from "./about";
import Contact from "./contact";
import Menu from "./menu";
import Login from "./login";
import Admin from "./admin";
import ProductForm from "./productForm";

//version 1
// class App extends Component {
//   state = {
//     products: [
//       { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
//       { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
//       { id: 3, name: "Cola", count: 0, price: 10, isInCart: false }
//     ]
//   };

//   handleReset = () => {
//     //Clone
//     let products = [...this.state.products];
//     //Edit
//     products = products.map((p) => {
//       p.count = 0;
//       return p;
//     });
//     //Set state
//     this.setState({ products });
//   };

//   IncrementHandler = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     //Edit
//     products[index].count++;
//     //Set State
//     this.setState({ products });
//   };

//   handleDelete = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     //Edit
//     products.splice(index, 1);
//     //Set State
//     this.setState({ products });
//   };

//   handleInCartChange = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     //Edit
//     products[index].isInCart = !products[index].isInCart;
//     //Set State
//     this.setState({ products });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           productsCount={this.state.products.filter((p) => p.isInCart).length}
//         />
//         <main className="container">
//           <Switch>
//             <Route
//               path="/products/:id/:name?"
//               render={(props) => (
//                 <ProductDetails products={this.state.products} {...props} />
//               )}
//             />
//             <Route
//               path="/cart"
//               render={(props) => (
//                 <ShoppingCart
//                   products={this.state.products.filter((p) => p.isInCart)}
//                   onIncrement={this.IncrementHandler}
//                   onDelete={this.handleInCartChange}
//                   onReset={this.handleReset}
//                   {...props}
//                 />
//               )}
//             />
//             <Route path="/notfound" component={NotFound} />
//             {/* //2. Add Route */}
//             <Route
//               path="/menu"
//               render={(props) => (
//                 <Menu
//                   {...props}
//                   products={this.state.products}
//                   onClick={this.handleInCartChange}
//                 />
//               )}
//             />
//             <Route path="/home" exact component={Home} />
//             <Redirect from="/" to="/home" />
//             <Redirect to="/notfound" />
//           </Switch>
//           {/* <ShoppingCart
//             products={this.state.products}
//             onIncrement={this.IncrementHandler}
//             onDelete={this.handleDelete}
//             onReset={this.handleReset}
//           /> */}
//         </main>
//       </React.Fragment>
//     );
//   }
// }
//version2
// class App extends Component {
//   state = {
//     products: [
//       { id: 1, name: "Burger", count: 0, price: 30, isInCart: false },
//       { id: 2, name: "Fries", count: 0, price: 20, isInCart: false },
//       { id: 3, name: "Cola", count: 0, price: 10, isInCart: false }
//     ]
//   };

//   handleReset = () => {
//     //Clone
//     let products = [...this.state.products];
//     //Edit
//     products = products.map((p) => {
//       p.count = 0;
//       return p;
//     });
//     //Set state
//     this.setState({ products });
//   };

//   IncrementHandler = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     //Edit
//     products[index].count++;
//     //Set State
//     this.setState({ products });
//   };

//   handleDelete = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     //Edit
//     products.splice(index, 1);
//     //Set State
//     this.setState({ products });
//   };

//   handleInCartChange = (product) => {
//     //Clone
//     const products = [...this.state.products];
//     const index = products.indexOf(product);
//     products[index] = { ...products[index] };
//     //Edit
//     products[index].isInCart = !products[index].isInCart;
//     //Set State
//     this.setState({ products });
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <NavBar
//           productsCount={this.state.products.filter((p) => p.isInCart).length}
//         />
//         <main className="container">
//           <Switch>
//             <Route
//               path="/products/:id/:name?"
//               render={(props) => (
//                 <ProductDetails products={this.state.products} {...props} />
//               )}
//             />
//             <Route path="/login" component={Login} />
//             <Route
//               path="/cart"
//               render={(props) => (
//                 <ShoppingCart
//                   products={this.state.products.filter((p) => p.isInCart)}
//                   onIncrement={this.IncrementHandler}
//                   onDelete={this.handleInCartChange}
//                   onReset={this.handleReset}
//                   {...props}
//                 />
//               )}
//             />
//             <Route path="/notfound" component={NotFound} />
//             <Route
//               path="/menu"
//               render={(props) => (
//                 <Menu
//                   {...props}
//                   products={this.state.products}
//                   onClick={this.handleInCartChange}
//                 />
//               )}
//             />
//             <Route path="/home" exact component={Home} />
//             <Redirect from="/" to="/home" />
//             <Redirect to="/notfound" />
//           </Switch>
//           {/* <ShoppingCart
//             products={this.state.products}
//             onIncrement={this.IncrementHandler}
//             onDelete={this.handleDelete}
//             onReset={this.handleReset}
//           /> */}
//         </main>
//       </React.Fragment>
//     );
//   }
// }



//version 3
class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    //Call Backend
    let { data } = await axios.get(
      "https://iti-react-cource.herokuapp.com/products"
    );

    //Convert Object reterned from Firebase to Array
    //In Lecture we use JSON-SERVER
    // const dataArray = [];
    // for (const key in data) {
    //   dataArray[parseInt(data[key].id)] = data[key];
    // }

    //Set State
    this.setState({ products: data });
  }

  //Not good Solution !!!
  // async componentDidUpdate() {
  //   //Call Backend
  //   const { data } = await axios.get(
  //     "https://burger-restaurant-iti.firebaseio.com/products.json"
  //   );
  //   //Set State
  //   this.setState({ products: data });
  // }

  handleDelete = async (product) => {
    const oldProducts = [...this.state.products];

    //State
    //Clone
    //Edit
    const products = this.state.products.filter((p) => p.id !== product.id);
    //Set state
    this.setState({ products });

    try {
      //Call B
      await axios.delete(
        "https://iti-react-cource.herokuapp.com/products/" + product.id
      );
    } catch (ex) {
      toast("Cant Delete");
      this.setState({ products: oldProducts });
    }
  };

  handleEdit = () => {
    console.log("edit");
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

  handleInCartChange = (product) => {
    //Clone
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    //Edit
    products[index].isInCart = !products[index].isInCart;
    //Set State
    this.setState({ products });
  };

  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar
          productsCount={this.state.products.filter((p) => p.isInCart).length}
        />
        <main className="container">
          <Switch>
            <Route
              path="/products/:id/:name?"
              render={(props) => (
                <ProductDetails products={this.state.products} {...props} />
              )}
            />
            <Route
              path="/productform/:id"
              render={(props) => (
                <ProductForm {...props} products={this.state.products} />
              )}
            />
            <Route
              path="/admin"
              render={(props) => (
                <Admin
                  {...props}
                  products={this.state.products}
                  onDelete={this.handleDelete}
                />
              )}
            />
            <Route path="/login" component={Login} />
            <Route
              path="/cart"
              render={(props) => (
                <ShoppingCart
                  products={this.state.products.filter((p) => p.isInCart)}
                  onIncrement={this.IncrementHandler}
                  onDelete={this.handleInCartChange}
                  onReset={this.handleReset}
                  {...props}
                />
              )}
            />
            <Route path="/notfound" component={NotFound} />
            {/* //2. Add Route */}
            <Route
              path="/menu"
              render={(props) => (
                <Menu
                  {...props}
                  products={this.state.products}
                  onClick={this.handleInCartChange}
                />
              )}
            />
            <Route path="/home" exact component={Home} />
            <Redirect from="/" to="/home" />
            <Redirect to="/notfound" />
          </Switch>
          {/* <ShoppingCart
            products={this.state.products}
            onIncrement={this.IncrementHandler}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          /> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
