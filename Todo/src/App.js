import React,{useState,useEffect} from "react";
import todos from "./components/apis";

import Form from "./components/Form";
import Section from "./components/Section";
import List from "./components/List";



const appTitle="To-Do App"



const App=()=> {
    const[todoList,setTodoList]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const { data}= await todos.get("/todos");
            setTodoList(data);
        }

        fetchData();

        // (async function (){
        //     const response= await axios.get("http://localhost:3030/todos/");
        // })();
    },[]);

    const addTodo=async(item)=>{
        const {data} = await todos.post("/todos", item);
        setTodoList((oldList)=>[...oldList,data]);

    };

    const removeTodo=async(id,item)=>{
        await todos.delete(`/todos/${id}`, item);
        setTodoList((oldList)=>oldList.filter((item)=>item._id!=id));
    };

    const editTodo=async(id,item)=>{
        await todos.put(`/todos/${id}`,item);
    };


    return(  
    <div className="ui container center aligned">
        <Section><h1>{appTitle}</h1></Section>
        <Section><Form addTodo={addTodo}/></Section>
        <Section>
            <List
            editTodoListProp={editTodo}
            removeTodoListProp={removeTodo} 
            list={todoList}/>
        </Section>  
    </div>
    );   
}
export default App;
