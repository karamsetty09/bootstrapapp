import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: "/Users/user/Desktop/2999AC0220334860873_P.jpg",
        tags: ['tag1', 'tag2', 'tag3']
    };
    
    render() { 
        return (
        <div>
            <img src={this.state.imageUrl} alt="img"/>
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button 
            onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">click for Increment</button>
            <span>{ this.getconRendering() }</span>

        </div>
        );
    }

    handleIncrement = product => {
        //this.state.count++;
        console.log(product);
        this.setState({ count: this.state.count + 1 });
        //console.log("Increment Clicked", this);
    };

    // doHandleIncrement = () => {
    //     this.handleIncrement({ id: 1 });
    // };

    getconRendering() {
        if(this.state.tags.length === 0) return <p>There anre no tags!</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    };

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    };

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    };


}
 
export default Counter;