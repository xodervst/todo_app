import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, {useState} from "react";



const Form=({addTodo})=>{
    const [inputValue, setInputValue]= useState("");

    const handleInputChange =(e)=>{
        setInputValue(e.target.value);
    };

    const handleFormSubmit=(e)=>{
        e.preventDefault();
        if(inputValue.trim()!=""){
            addTodo({title:inputValue,completed:false})
        }     
        setInputValue("");
    };

    return(
        <form className="ui form" onSubmit={handleFormSubmit}>
            <div className="ui grid center aligned">
                <div className="row">
                    <div className="column five wide">
                        <input 
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder="Add Something in Your To Do List"
                        />
                    </div> 
                    {/* grid system in symentic library consists of 16 columns. */}
                    <div className="column three wide"><button type="submit" className="ui button circular icon green"><i className="plus icon white"></i></button></div>
            
                    
                </div>
            </div>
        </form>
    );
};

export default Form;