import React from 'react';
import "./Todo.css";
import { FileCheck2, Trash2 } from 'lucide-react';

const TodoCards = ({title , body , id , delid , display , updateId , toBeUpdate}) => {

  return (
    <div className='todo-cards p-3'>
        <div>
            <h5>
                {title}
            </h5>
                <p>{body.split("",80)}...</p>
        </div>
        <div className='d-flex justify-content-around'>
            <div className='d-flex justify-content-center align-items-center todo-cards-icon px-2 py-1' onClick={() => {
                display("block");
                toBeUpdate(updateId);
            }} >
                <FileCheck2 />&nbsp;Update
            </div>
            <div className='d-flex justify-content-center align-items-center todo-cards-icon px-2 py-1 text-danger' onClick={() => delid(id)}>
                <Trash2 className='del' />&nbsp;Delete
            </div>
        </div>
    </div>
  )
};

export default TodoCards;