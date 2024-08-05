import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store';
import "./Signup.css";
import SignComp from './signComp';

const Login = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const change = (e) => {
        const {name , value} = e.target;
        setInputs({...Inputs , [name] : value});
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios
            .post(`https://todo-api-henna.vercel.app/api/v1/login` , Inputs)
            .then((response) => {
                sessionStorage.setItem("id",response.data.others._id);
                dispatch(authActions.login());
                history("/todo");
            });
    };

  return (
    <div className="signup">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 column column-heading d-lg-flex d-none justify-content-center align-items-center">
                    <SignComp first="Sign" second="In" />
                </div>
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-3'>
                        <input className='p-2 my-3 input-signup' name='email' type='email' placeholder='Enter your Email' value={Inputs.email} onChange={change} />
                        <input className='p-2 my-3 input-signup' name='password' type='password' placeholder='Enter your Password' value={Inputs.password} onChange={change} />
                        <button className='btn' onClick={submit}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login;