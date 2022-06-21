import React from 'react';
import "./Book.css"
import ham from "../../images/hamburger-494706.jpg"


function Book(params) {
    return(
        <div className='book-container'>
            <div className='l-col'>
                <div className='l-col-image fadein-left'>
                    <img src={ham} alt='' />
                </div>
            </div>
            <div className='r-col'>
                <div className='r-col-text'>
                    <div className='text-area fadein-right'>
                    <div className='r-col-head'>
                        <h1>Book A Table</h1>
                        <p>dhufdbvdhg fdeujfhkfl eidfj dfie ief iuhd<br/> ud8 uedh urh</p>
                    </div>
                    <div className='input-wrapper'>
                    <input type="text" placeholder='Number Of Guest' className='input-text'/><br/>
                   
                    <input type="date" placeholder='Date' className='selector'/>
                    <select className='selector'>
                        
                            <option value="Meal Type">Meal Type</option>
                            <option value="BreakFast">BreakFast</option>
                            <option value="Lunch">Lunch</option>
                            <option value="Dinner">Dinner</option>
                            
                        
                    </select><br/>
                   
                   
                    <input type="text" placeholder='Phone' className='input-text'/>
                    <br/>
                    <textarea rows="4" cols="52"  name="subject"   placeholder="Write something.." ></textarea>
                 
                    </div>
                    <div className='book-button'>
                    <button className='sub-btn'> Send Request</button>
                    </div>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
export default Book;