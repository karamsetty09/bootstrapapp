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

    // function module to handle deleting of counter
    handleDelete = counterId => {
      const counters = this.state.counters.filter(c => c.id !== counterId );
      this.setState({ counters});
    };

    render() { 
        return (
          <div>
            {this.state.counters.map(counter => ( //map the counters of id and value in state and bind them to counter for display
              <Counter 
              key={counter.id} 
              onDelete={this.handleDelete} 
              counter={counter} />
                
            ))}
          </div>    
        );
    }
  }
 
export default Counters;