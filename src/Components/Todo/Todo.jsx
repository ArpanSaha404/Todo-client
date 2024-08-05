import React, { useState , useEffect } from 'react';
import TodoCards from './todoCards';
import "./Todo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from 'axios';

let id = sessionStorage.getItem("id");
let toUpdateArray = [];
const Todo = () => {
    const [Inputs, setInputs] = useState({title:"", body:""});
    const [Array, setArray] = useState([]);

    const update = (value) => {
        toUpdateArray = Array[value];
    };
    
    const show = () => {
        document.getElementById("todo-textarea").style.display = "block";
    };

    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs,[name]:value})
    };

    const submit = async () => {
        if(Inputs.title === "" || Inputs.body === "")
        {
            if(Inputs.title === "")
            {
                toast.error("Title is Empty");
            }
            else
            {
                toast.error("Body is Empty");
            }
        }
        else
        {
            if(id)
            {
                await axios
                    .post(`https://todo-api-six-zeta.vercel.app/api/v1/addTask` , {title: Inputs.title , body: Inputs.body , id: id})
                    .then((response) => {
                        console.log(response);
                    });
                setInputs({title:"", body:""});
                toast.success("Task Added Sccessfully...");
                
            }
            else
            {
                setArray([...Array , Inputs]);
                setInputs({title:"", body:""});
                toast.success("Task Added Sccessfully...");
                toast.error("Your Task is not Saved. Please SignUp First...");
            }
            
        }
        
    };

    const del = async (cardid) => {
        if(id)
        {
            await axios
            .delete(`https://todo-api-six-zeta.vercel.app/api/v1/deleteTask/${cardid}`, {data:{id:id}})
            .then(() => {
                toast.success("Task Deleted Sccessfully...");
            });
        }
        else
        {
            toast.error("Please Sign Up First...");
        }
    };

    const dis = (value) => {
        document.getElementById("todo-update").style.display = value;
    };

    useEffect(() => {
        if(id)
        {
            const fetch = async () => {
                await axios
                    .get(`https://todo-api-six-zeta.vercel.app/api/v1/getTasks/${id}`)
                    .then((response) => {
                        setArray(response.data.list);
                    });
              };
              fetch();
        }
    }, [submit]);

  return (
    <div>
        <div className='todo'>
        <ToastContainer />
        <div className='todo-main container d-flex flex-column justify-content-center align-items-center'>
            <div className='d-flex flex-column todo-inputs-div w-lg-50 w-100'>
                <input type='text' name='title' value={Inputs.title} placeholder='Title' className='todo-inputs my-3 p-1' onClick={show} onChange={change} />
                <textarea id='todo-textarea' type='text' name='body' value={Inputs.body} placeholder='Body' className='todo-inputs my-3 p-2' onChange={change} />
            </div>
            <div className='d-flex justify-content-end w-50 my-3'>
                <button className='home-btn px-2 py-1' onClick={submit}>Add Task</button>
            </div>
        </div><br />
        <div className='todo-main-body'>
            <div className='container-fluid'>
                <div className='row'>
                {Array && Array.map((item , index) => (
                        <>
                            <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                                <TodoCards title={item.title} body={item.body} id={item._id} delid={del} display={dis} updateId={index} toBeUpdate={update} />
                            </div>
                        </>
                        ))}
                </div>
            </div>
        </div>
    </div>
    <div className='todo-update' id='todo-update'>
        <div className='container update'>
            <Update display={dis} update={toUpdateArray} />
        </div>
        
    </div>
    </div>
  )
}

export default Todo;