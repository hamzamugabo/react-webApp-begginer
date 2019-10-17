import React, { Component, StyleSheet } from 'react';
class Counter extends Component {
  state = {
      count: 0
  };
    render() {
        
        return(
        <div>
            <span  className={this.getBadgeClasses()}>{this.formatCounter()}</span>
        <button className="btn btn-secondary">Increment</button>
        </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "btn m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCounter(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }

    
}
export default Counter;