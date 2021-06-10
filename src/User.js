import React, { Component } from 'react';

class User extends Component{
  render(){
    const text = this.props.show ? `${this.props.name} played ${this.props.gamesPlayed} games` : `${this.props.name} played \\* games.`;
    return <span> {text} </span>
  }
}

export default User;