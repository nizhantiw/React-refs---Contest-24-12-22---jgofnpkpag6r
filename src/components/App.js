import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  state={
  email: "",
  password: ""
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: this.refs.textInput.email, password: this.refs.textInput.password })
  };

//code here 

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={this.state.email} ref={} onChange={}/><br/>
      Password
      <input id="inputPassword" type="text" value={this.state.password} ref={} onChange={}/><br/>
      <button id="submitButton" onClick={}>Submit</button><br/>
      <p id="emailText">Your Email : {}</p>
      <p id ="passwordText">Your Password : {}</p>
      
    </div>
  )
}


export default App;
