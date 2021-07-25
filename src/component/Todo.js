import React, { useState } from 'react';
import  './todo.css';
import { useSelector,useDispatch } from 'react-redux';
import{addTodo,deleteTodo,removeTodo} from '../actions/index';
const Todo=()=>{
   const list=useSelector((state)=>state.todoReducers.list);
    const [inputData,setInputData]=useState('');
    const dispatch=useDispatch();
    return(
        <> 
        <div className="main-div ">
      <div className="child-div">
        <figure>
          <figcaption> Add your list Hear </figcaption>
        </figure>
       <div  className='addItems'>
         <input type="text"  placeholder="Add item"
            value={inputData} 

            onChange={(event)=> setInputData(event.target.value)} />

         <i className="fa fa-plus add-btn" onClick={()=>dispatch(addTodo(inputData), setInputData(""))}></i>

       </div>

       <div className="showItems">
         {
           list.map((elem)=>{
             return(
               <> 
              <div className="eachItem" key={elem.id}>     
               <h3>{elem.data}</h3>

            <div className="todo-btn ">
              <i className="far fa-trash-alt add-btn"  title='Delete Item'onClick={()=>dispatch(deleteTodo(elem.id))}></i>
         </div>
         </div>
               </>
             )
           })
         }
  
          
       </div>
       <div className="showItem"></div>
       <button className="btn effect04 " 
           onClick={()=>dispatch(removeTodo())}><span>Check List</span></button>

      </div >

      </div>
      
        </>
    )
}
export default Todo;