import React from 'react';

class Products extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTask: false,
            expanded : false 
        }
    }

    render(){
        return ( <div><p>Products ! </p></div>)
    }
}

export default Products;