import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
  state = { 
    counters: [  // parsing data to Counter components
        { id:1, value: 4 },
        { id:2, value: 0 },
        { id:3, value: 0 },
        { id:4, value: 0 }
    ]
};

// Hooks in java script has three phases mount, updating and unmount.
// Now to mount using - constructor 
constructor() { // constructor mounting
  super();
  console.log("App - Constructor");


}

componentDidMount(){
  // Ajax calls or any rendering can be renderedd 

}

componentDidUpdate(){

}

componentWillUnmount(){

}

// handling of counters as a controlled component when event is raised.
handleIncrement = counter => { 
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value++;
  this.setState({counters});
  console.log(this.state.counters[0]);
};

handleDecrement = counter => {
  const counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index] = {...counter};
  counters[index].value--;
  this.setState({counters});
  console.log(this.state.counters[0]);
}


// function module to handle deleting of counter
handleDelete = counterId => {
  const counters = this.state.counters.filter(c => c.id !== counterId );
  this.setState({ counters});
};

// function module to handle reset button
handleReset = () => {
  const counters = this.state.counters.map(c =>{
    c.value = 0;
    return c;
  });
  this.setState({counters});
};
  render() { 
    return (  <React.Fragment>

      <NavBar 
      totalCounters={this.state.counters.filter(c => c.vlaue > 0).length}
      />
      <main className="container">
        <Counters 
        counters={this.state.counters}
          onReset ={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>);
  }
}
 
export default App;


