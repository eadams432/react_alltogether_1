import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser.js';
import UserList from './UserList.js';
import ToggleGames from './ToggleGames.js';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
  	users:[],
    showGames: true
  }
  
  isDuplicateUser = (userObj) =>{
    let duplicate = false;
  	for (let i=0; i<this.state.users.length; i++){
      if (this.state.users[i].userName === userObj.userName){
      	duplicate = true;
        break;
      }
    }
    return duplicate;
  }
  
  handleNewUser = (userObj)=> {
    console.log(userObj);
  	this.setState((prevState)=>({
      	users : [...prevState.users, userObj]
    }));
  }
  
  toggleGames = () => {
  	this.setState(prevState=> ({
    	showGames : !prevState.showGames
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<div>
			<AddUser handleUser={this.handleNewUser} isDuplicate={this.isDuplicateUser}/>
			<ToggleGames show={this.state.showGames} toggle={this.toggleGames}/>
			<UserList userList={this.state.users} show={this.state.showGames} />
		</div>
      </div>
    );
  }
}

export default App;
