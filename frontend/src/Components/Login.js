import './Styles/Login.css';

import { Link } from 'react-router-dom';
// import { Button } from '@material-ui/core';
// import myImage from './img5.jpg';

function Login() {
  return (
    <div className="App">
      <header className="App-header">
        <div className= "main-content">
        {/* <div className="data">
            <img src={myImage} />
          </div> */}
          <div className="box">
            <h1>Welcome Back!</h1>

            <label>Email</label><br/>
            <input type="email" placeholder="Enter you Email"required/><br/>

            <label>Password</label><br/>
            <input type="Password" placeholder="Enter you password"required/><br/>
            <button type = "Submit" name="signup">Signin</button><br/>
            {/* <Button variant="contained" color="primary">Signin</Button> */}
            <p>Don't have an account?<Link to="/register">Signup</Link></p>
          </div>
          
        </div>
      </header>
    </div>
  );
}

export default Login;
