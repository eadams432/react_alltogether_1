import React, { Component } from 'react';

class AddUser extends Component{
  state = {
  	firstName:'',
    lastName:'',
    userName:'',
    isDuplicate: false
  }
  
  handleChange = (event, property)=> {
    const value = event.target.value;
    switch(property){
      case 'firstName':
      	this.setState({
          firstName : value
        });
    	break;
    case 'lastName':
      	this.setState({
          lastName : value
        });
    	break;
    case 'userName':
      	this.setState({
          userName : value
        });
    	break;
    default:
    	console.log('unknown property');
    }
  }
  
 handleNewUser = (event) => {
 	event.preventDefault();
   	const newUser = {
    	userName: this.state.userName,
      	numGames: 0
    }
    if (this.props.isDuplicate(newUser)){
    	this.setState({
        	isDuplicate: true
        });
    } else {
    	this.addUser(newUser);
    }
 }
                  
 addUser = (user) => {
	this.props.handleUser(user);
    this.resetState();
  }
  
  resetState = () => {
  	this.setState({
    	firstName:'',
    	lastName:'',
    	userName:'',
        isDuplicate: false
    });
  }
  
  allFieldsEntered = () => {
  	return this.state.firstName.length > 0 && this.state.lastName.length && this.state.userName.length
  }
  
  render(){
  	return(
    	<div>
      		<form onSubmit={this.handleNewUser}>
			<input
            type="text"
            placeholder="First name"
            value={this.state.firstName}
            onChange={(event)=>{this.handleChange(event, 'firstName')}}
            />
			<input
            type="text"
            placeholder="Last name"
            value={this.state.lastName}
            onChange={(event)=>{this.handleChange(event, 'lastName')}}
            />

			<input
            type="text"
            placeholder="username"
            value={this.state.userName}
            onChange={(event)=>{this.handleChange(event, 'userName')}}
            />
			<button disabled={!this.allFieldsEntered()}>Add</button>
			</form>
			{this.state.isDuplicate && (
             <p>Duplicate user!</p>
             )}
      	</div>
    );
  }

}

export default AddUser;