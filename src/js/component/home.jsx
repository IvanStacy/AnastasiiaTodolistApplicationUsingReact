import React, { useEffect, useState } from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

const Home = () => {
	const [inputvalue, setInputValue]=useState("")
// const todos = ["Make the bed", " Make the hands", "Eat", "Walk the dog"]
// useEffect(()=>{
// 	localStorage.setItem('todos', JSON.stringify(todos))
// })
const [todos, setTodos] =useState([])
useEffect(()=>{
	setInputValue(todos);
},[]);
const addEntry =()=>{
	
}
	return (
		<div className="container">
			<h1>My todoList</h1>
			<ul>
				<li><input onChange={(e)=>setInputValue(e.target.value)} value={inputvalue} type="text" placeholder="Add something here" onKeyDown={(e)=>{
					if (e.key === "Enter"){
						setTodos(todos.concat([inputvalue]))
						setInputValue("")
					}
					}}></input></li>
				{
					todos.map((num, index) => (<li key={index}>{num}<i className="fa=regular fa-trash-can"></i></li>))
				}
			</ul>

		</div>
	)
		{/* // 	<h1 class="todo-header">My todoList</h1>
		// 	<ul>
		// 		<li><input type="text" placeholder="Add something here" ></input></li>
		// 		<li>
		// 			<span><i className="fa fa-trash"></i></span> Make the bed
		// 		</li>
		// 		<li>
		// 			<span><i className="fa fa-trash"></i></span> Make the hands
		// 		</li>
		// 		<li>
		// 			<span><i className="fa fa-trash"></i></span> Eat
		// 		</li>
        //         <li>
		// 			<span><i className="fa fa-trash"></i></span> Walk the dog
		// 		</li>
			</ul> */}
		}

export default Home;
