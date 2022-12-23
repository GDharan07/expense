import "./Expense.css"

import ExpenseDate from "../Expense/ExpenseDate";
// import {useState} from "react";
import Card from "../UI/Card";



const ExpenseItem =(props)=>{
//     const [update,setUpdate]=useState()

// const Click=()=>{
//     setUpdate("updated")
//     console.log(update)
// }

    return(
<div >
    <Card id="expense">
        
    <ExpenseDate date={props.exe.date}/> 
{/* <p>{props.exe.date}</p> */}
<p id="loan">{props.exe.loan}</p>
<p id="cost">{props.exe.cost}</p>
<button  onClick={()=>props.del(props.exe.id)} id='del-btn'>Delete</button>
</Card>
</div>



    )
}
export default ExpenseItem;