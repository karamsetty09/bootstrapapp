import React, { Component } from 'react'; // use imrc to get this line of code by extension simple React snippets
import Counter from './counter';
// use cc to get this below class by extension simple React snippets
class Counters extends Component {
    state = { 
        counters: [  // parsing data to Counter components
            { id:1, value: 4 },
            { id:2, value: 0 },
            { id:3, value: 0 },
            { id:4, value: 0 }
        ]
    };

    // handling of counters as a controlled component when event is raised.
    handleIncrement = counter => { 
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({counters});
      console.log(this.state.counters[0]);
    };


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
        return (
          <div>
            <button 
            onClick={this.handleReset} // calling the reset function 
            className="btn btn-primary btn-sm m-2">Reset</button>
            {this.state.counters.map(counter => ( //map the counters of id and value in state and bind them to counter for display
              <Counter 
              key={counter.id} 
              onDelete={this.handleDelete}  // calling delete function
              onIncrement={this.handleIncrement} // calling Increment function
              counter={counter} />
                
            ))}
          </div>    
        );
    }
  }
 
export default Counters;