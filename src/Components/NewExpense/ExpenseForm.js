import "./Expenseform.css";
import { useState } from "react";

const ExpenseForm=(props)=>{
    const [titleerror,setTitleError]=useState(false);
    const[amounterror,setAmountError]=useState(false);
    const[dateerror,setDateError]=useState(false);
    const [titlecolor,setTitleColor]=useState(false);
     const [amountcolor,setAmountColor]=useState(false);
      const [datecolor,setDateColor]=useState(false);
const [title,setTitle]=useState('');
const[amount,setAmount]=useState('');
const[date,setDate]=useState('');

const titleChange=(event)=>{
    setTitle(event.target.value)
    setTitleError(false)
    setTitleColor(false)
  
}
const amountChange=(event)=>{
    setAmount(event.target.value)
    setAmountError(false)
    setAmountColor(false)
}

const dateChange=(event)=>{
    setDate(event.target.value)
    setDateError(false)
    setDateColor(false)
}
const add=(event)=>{
  event.preventDefault();
    if (title.length===0){
        setTitleError(true)
        setTitleColor(true)
        return
    }else if(amount.length===0){
        setAmountError (true)
        setAmountColor(true)
        return
    }else if(date.length===0){
        setDateError(true)
        setDateColor(true)
        return
    }
   
    let addobj={
        id:Math.floor(Math.random()*1000),
        loan:title,
        cost:amount,
        date:new Date(date)
    }
    props.addobj1(addobj)
// console.log(addobj)
// console.log(amount)
// console.log(date)
setTitle('')
setAmount('')
setDate('')
}

    return(

    <div>
         <div id="expenseform">

<form >
    
    <label htmlFor="title" style={{ color : titlecolor ? "red" : " "}}>Title:</label><br />
    <input type="text" id="title" onChange={titleChange} value={title} style={{ borderColor : titlecolor ? "red" : " "}}></input><br />
    {titleerror ? (<p> Oppps! Empty Field</p> ) : ""}
    <label htmlFor="amount" style={{ color : amountcolor ? "red" : " "}}>Amount:</label><br/>
    <input type="number" id="amount" onChange={amountChange} value={amount} style={{ borderColor : amountcolor ? "red" : " "}}></input><br/>
     {amounterror ? (<p> Oppps! Empty Field</p> ) : ""}
    <label htmlFor="datee" style={{ color : datecolor ? "red" : " "}}>Date:</label><br/>
    <input type="date" id="datee" onChange={dateChange} value={date} style={{ borderColor : datecolor ? "red" : " "}}></input><br/>
     {dateerror ? (<p> Oppps! Empty Field</p> ) : ""}
    <button onClick={props.cancel}>Cancel</button>
    <button onClick={add}>Submit</button>
</form>
        </div>
        </div>
    )
}
export default ExpenseForm;