import ExpenseForm from "./ExpenseForm"
import { useState } from "react"

const NewExpenseForm=(props)=>{

function addobj2(addobj1){
// console.log(addobj1)
props.addobj3(addobj1)
setNewExpense(false)
}
const [newexpense,setNewExpense]=useState(false);
const newExpense=()=>{
setNewExpense(true)
}
const cancel=()=>{

    setNewExpense(false)
}
    return(
        <div id="newform">
            { newexpense === true ? (<ExpenseForm addobj1={addobj2}  cancel={cancel}/>) : 
            ( <button onClick={newExpense}>New Expense Form</button>)  }
            {/* <button onClick={newExpense}>New Expense Form</button> */}
{/* <ExpenseForm addobj1={addobj2}/> */}
        </div>
    )
}
export default NewExpenseForm;