
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Components/Register.js';
import Login from './Components/Login.js';
import Home from './Components/Home.js';
import About from './Components/About.js';
import Course from './Components/Courses.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Course/>} />
      </Routes>
    </Router>
  );
}

export default App;
