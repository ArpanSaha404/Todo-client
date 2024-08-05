import React from "react";
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "./store";
import { useEffect } from "react";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/home/home";
import Signup from "./Components/Signup/signup";
import Footer from "./Components/footer/footer";
import Login from "./Components/Signup/Login";
import About from "./Components/about/about";
import Todo from "./Components/Todo/Todo";

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    const id = sessionStorage.getItem("id");
    if(id)
    {
      dispatch(authActions.login());
    }
  }, []);
  

  return <div>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
    <Footer />
  </div>
};

export default App;