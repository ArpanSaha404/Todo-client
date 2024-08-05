import React from 'react';
import "./Signup.css";

const SignComp = ({first , second}) => {
  return (
    <div>
        <h1 className="text-center sign-up-col">
            {first} <br /> {second}</h1>
    </div>
  )
};

export default SignComp;