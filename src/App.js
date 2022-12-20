import './App.css';
import Expense from './Components/Expense/Expense';
import NewExpenseForm from './Components/NewExpense/NewExpenseForm';
import {useState} from "react";
// import Expense from './Components/ExpenseItem';

function App() {
//  let date="2 augest 2022"
//  let loan ="bank loan"
//  let cost="20000"
const array=[
  {
    id:Math.floor(Math.random()*1000),
    date:new Date(2022,5,24),
    loan:"bank loan",
    cost:"40000"
  },
  {
    id:Math.floor(Math.random()*1000),
    date:new Date(2022,6,24),
    loan:"Shop loan",
    cost:"30000"
  }
  
] 

const [updateItem,setUpdateItem]=useState(array)



function addobj4(addobj3){
  // console.log(addobj3 )
  // console.log("from app.js")
  setUpdateItem((item)=>{
    return [addobj3,...item]
  })
}
const del=(id)=>{
  setUpdateItem((dat)=>{ return dat.filter((da)=> da.id !== id) })
}

 
  return (
    <div className="App">
      <h1>Expense Form</h1>
      <NewExpenseForm addobj3={addobj4} />
    {/* <Expense exe={array[0]}/>
    <Expense exe={array[1]}/> */}
    <div id="apparry">
    <Expense array={updateItem} del={del}/>
    </div>
    </div>
  );
}

export default App;
