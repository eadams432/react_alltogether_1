import React, { Component } from 'react';
import User from './User';

class UserList extends Component{

  render(){
  return(   
    <ul>
      {this.props.userList.map(user=>{
      	return <li><User name={user.userName} gamesPlayed={user.numGames} show={this.props.show}/> </li>
      })}
    </ul>
	)
	}
}

export default UserList;