import React from "react";


class CartItem extends React.Component {
    constructor() {
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
        //we can also bind the function here and call its refernce in the onClick function
        //this.increaseQuantity = this.increaseQuantity.bind(this);

    }
    //or use arrow function for binding
    increaseQuantity = () => {
        //console.log('state',this.state);
        // this.state.qty+=1;
        //setState form 1
        // this.setState({
        //     qty: this.state.qty+1
        // });

        //setState form 2 - if prevSate required use this state
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
        
    }
    decreaseQuantity = () =>{
        this.setState((prevState) =>{
            return {
                qty: prevState.qty-1
            }
        });
    }
    render(){
        const { price,title,qty }=this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={ { fontSize:25} }>{title}</div>
                    <div style={ { color:'#777'} }>Rs {price}</div>
                    <div style={ { color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        
                            
                            <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/3524/3524388.png" 
                            onClick={this.increaseQuantity} />
                            <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/56/56889.png" 
                            onClick={this.decreaseQuantity} />
                            <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                            
                        
                        
                    </div>
                </div>

            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}

export default CartItem;