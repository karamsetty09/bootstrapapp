import React, { Component } from 'react'; // use imrc to get this line of code by extension simple React snippets
import Counter from './counter';
// use cc to get this below class by extension simple React snippets
class Counters extends Component {
    

    render() { 

      const{onReset, counters, onDelete, onIncrement} = this.props;  // object destructuring 


        return (
          <div>
            <button 
            onClick={onReset} // calling the reset function 
            className="btn btn-primary btn-sm m-2">Reset</button>
            {counters.map(counter => ( //map the counters of id and value in state and bind them to counter for display
              <Counter 
              key={counter.id} 
              onDelete={onDelete}  // calling delete function
              onIncrement={onIncrement} // calling Increment function
              counter={counter} />
                
            ))}
          </div>    
        );
    }
  }
 
export default Counters;