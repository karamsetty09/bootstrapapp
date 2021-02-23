import React, { Component } from 'react';     // use imrc to get this line of code by extension simple React snippets


// use cc to get this below class by extension simple React snippets

class Counter extends Component {       
    state = {
        value: 0
    };

    handleIncrement = () => {
        //this.state.count++;
        
        this.setState({ value: this.state.value + 1 });
        //console.log("Increment Clicked", this);
    };
    
    render() { 
        
        return (
        <div>
            
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm"
            >click for Increment
            
            </button>
            <button onClick={this.handleDelete} className="btn btn-danger btn-sm m-2">
                Delete
            </button>

        </div>
        );
    }

    

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // };

    getconRendering() {
        if(this.state.tags.length === 0) return <p>There anre no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const {value} = this.state;
        return value === 0 ? "zero" : value;
    };


}
 
export default Counter;