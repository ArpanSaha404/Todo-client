import React , { useState } from 'react';
import axios from "axios";
import "./Signup.css";
import SignComp from './signComp';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const history = useNavigate();
    const [Inputs, setInputs] = useState({
        email:"",
        username:"",
        password:""
    });

    const change = (e) => {
        const {name , value} = e.target;
        setInputs({...Inputs , [name] : value});
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`https://todo-api-henna.vercel.app/api/v1/register` , Inputs).then((response) => {
            console.log(response.data.message);
            if(response.data.message === "User already Exists...")
            {
                alert(response.data.message);
            }
            else
            {
                alert(response.data.message);
                setInputs({
                    email:"",
                    username:"",
                    password:""
                });
                history("/login");
            }
            
        });
    };

  return (
    <div className="signup">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 column d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-3'>
                        <input className='p-2 my-3 input-signup' name='email' type='email' placeholder='Enter your Email' value={Inputs.email} onChange={change} />
                        <input className='p-2 my-3 input-signup' name='username' type='username' placeholder='Enter your Username' value={Inputs.username} onChange={change} />
                        <input className='p-2 my-3 input-signup' name='password' type='password' placeholder='Enter your Password' value={Inputs.password} onChange={change} />
                        <button className='btn' onClick={submit}>Sign Up</button>
                    </div>
                </div>
                <div className="col-lg-4 column column-heading d-lg-flex justify-content-center align-items-center d-none">
                <SignComp first="Sign" second="Up" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup;