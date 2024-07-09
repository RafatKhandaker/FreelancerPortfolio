import React from 'react';

class Blog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showTask: false,
            expanded : false 
        }
    }

    render(){
        return ( <div><p>Blog! </p></div>)
    }
}

export default Blog;