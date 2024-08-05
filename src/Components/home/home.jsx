import React from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
    const todo = () => {
        navigate("/todo");
    };

    return <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1>
                Organize your Work <br /> and Life, Finally...
            </h1>
            <br />
            <p>Becomme focused, Organized and Calm with <br />Todo App. Te World's #1 Task Manager App.</p>
            <button className="home-btn p-2" onClick={todo}>Make Todo List</button>
        </div>
    </div>
}

export default Home;