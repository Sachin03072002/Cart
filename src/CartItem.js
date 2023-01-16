import React from "react";


const CartItem = (props) => {
    // constructor() {
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Phone',
    //         qty: 1,
    //         img: ''
    //     }
    //     //we can also bind the function here and call its refernce in the onClick function
    //     //this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }
    

    // testing(){
    //     const promise = new Promise((resolve,reject)=>{
    //         setTimeout(() => {
    //             resolve('done');
    //         },5000);
    //     })
    //     promise.then(()=>{
    //         //setState acts like a synchronous call
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});
    //         this.setState({qty: this.state.qty+10});
    //         console.log('state',this.state);
    //     });
    // }

    //or use arrow function for binding
    // increaseQuantity = () => {
    //     //console.log('state',this.state);
    //     // this.state.qty+=1;
    //     //setState form 1
    //     // this.setState({
    //     //     qty: this.state.qty+1
    //     // });

    //     //setState form 2 - if prevSate required use this state
    //     this.setState((prevState) => {
    //         return {
    //             qty: prevState.qty+1
    //         }
    //     });
    // }
    
    // decreaseQuantity = () =>{
    //     const { qty }=this.state;
    //     if(qty === 0){
    //         return;
             
    //     }
    //     this.setState((prevState) =>{
    //         return {
    //             qty: prevState.qty-1
    //         }
    //     });
    // }
        const { price,title,qty }=props.product;
        const { 
            product, 
            onIncreaseQuantity, 
            onDecreaseQuantity, 
            onDeleteProduct 
        }=props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} src={product.img} />
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
                            onClick={() =>{
                                onIncreaseQuantity(product)
                            }} />
                            <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/56/56889.png" 
                            onClick={()=>{
                                onDecreaseQuantity(product)
                            }} />
                            <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                            onClick={()=> onDeleteProduct(product.id)}
                            />

                            
                        
                        
                    </div>
                </div>

            </div>
        );
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