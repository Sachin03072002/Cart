
import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
        products:[
            {
                price:99,
                title:'Watch',
                qty:1,
                img:'',
                id: 1

            },
            {
                price:999,
                title:'Mobile Phone',
                qty:10,
                img:'',
                id: 2

            },{
                price:999,
                title:'Laptop',
                qty:4,
                img:'',
                id: 3

            }
        ]
    }
    //we can also bind the function here and call its refernce in the onClick function
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
}
handleIncreaseQuantity=(product)=>{
    console.log('heyy please inc the qty of ,',product);
    const { products } =this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products
    })
}
handleDecreaseQuantity=(product)=>{
    console.log('heyy please inc the qty of ,',product);
    const { products } =this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0){
        return;
    }else{
        products[index].qty-=1;
    }
    
    this.setState({
        products: products
    })
}
handleDeleteProduct = (id) =>{
    const { products }=this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
        // console.log('1');
    })
    
}
getCartTotal= ()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product) => {
cartTotal=cartTotal+product.qty*product.price
  });
  return cartTotal;
}

getCartCount=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((product) => {
    count+=product.qty;
  });
  return count;
}
  render(){
    const { products }=this.state;
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        <Cart 
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      <div style={ {fontSize:20,padding:10} }>
        Total: {this.getCartTotal()}
      </div>
      </div>
    );
}
}
export default App;
