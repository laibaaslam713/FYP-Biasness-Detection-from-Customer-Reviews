// import logo from './logo.svg';
import './Styles/Register.css';
import { Link } from 'react-router-dom';
// import {TextField} from '@mui/material';
// import myImage from './img5.jpg';

function Register() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "main-content">
          <div className="box">
          <h1>Create New Account!</h1>
          <label>Username</label><br/>
          <input type="email" placeholder="Enter you Email"required/><br/>
          <label>Email</label><br/>
            <input type="email" placeholder="Enter you Email"required/><br/>

            <label>Password</label><br/>
            <input type="Password" placeholder="Enter you password"required/><br/>
            <button type = "Submit" name="signup">Signup</button><br/>
            
            {/* <TextField label="Username"/> */}
            <p>Already have an account?<Link to="/Login">Signin</Link></p>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Register;
