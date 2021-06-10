import React, { Component } from 'react';

class ToggleGames extends Component{
  
  render(){
    const label = this.props.show ? 'Hide the Number of Games Played' : 'Show the Number of Games Played';
  	return(
    	<button onClick={this.props.toggle}>{label}</button>
    );
  }
}

export default ToggleGames;