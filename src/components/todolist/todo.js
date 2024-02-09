import React, { useState } from 'react'
import "./style.css"

 const Todo = () => {
    const[inputdata, setInputData] = useState();
  return (
    <div className='main-div'>
        <div className='child-div'>
            <figure>
                <img src="./logo.svg" alt="logo"/>
                <figcaption> Add your list</figcaption>
            </figure>
            <div className='addItems'>
                <input type="text" placeholder='add items' className='form-control'
                    value={inputdata} onChange={(event) => setInputData(event.target.value) }
                />
                <i className="fa fa-plus add-btn"></i>
            </div>
            { /* Show our Item */}
            <div className='showItems'>
                <div className='eachItem'>
                  <h3>apple</h3>
                  <div className='todo-btn'>
                  <i className="far fa-edit add-btn"></i>
                  <i className="far fa-trash-alt add-btn"></i>


                  </div>  
                </div>
            </div>


           { /* remove all button */}
            <div className='showItems'>
            <button className="btn effect04" data-sm-link-text='Remove All'><span>Check List</span>
            </button></div>
        </div>
    </div>
  )
}
export default Todo;