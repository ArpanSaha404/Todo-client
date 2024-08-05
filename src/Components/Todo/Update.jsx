import React from 'react';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Update = ({display , update}) => {

    useEffect(() => {
      setInputs({
        title: update.title,
      body: update.body
      });
    }, [update]);
  
  const [Inputs, setInputs] = useState({
    title: update.title,
    body: update.body
  });

  const change = (e) => {  
    const {name , value} = e.target;
    setInputs({...Inputs , [name] : value});
  };

  const submit = async () => {
    await axios
      .put(`https://todo-api-six-zeta.vercel.app/api/v1/updateTask/${update._id}`, Inputs)
      .then((response) => {
        toast.success("Task is Updated Successfully...");
      });
    display("none");
  };

  return (
    <div className='p-5 d-flex justify-content-center align-items-start update flex-column'>
        <h3 className='update-heading'>Update your Task</h3>
        <input name='title' type='text' value={Inputs.title} className='todo-inputs my-4 w-100 p-3 todo-update-inputs' onChange={change} />
        <textarea name='body' value={Inputs.body} className='todo-inputs w-100 p-3 todo-update-inputs' onChange={change} />
        <div>
            <button className='btn btn-dark my-4' onClick={submit}>Update</button>
            <button className='btn btn-danger my-4 mx-3' onClick={() => display("none")}>Close</button>
        </div>
    </div>
  )
}

export default Update;