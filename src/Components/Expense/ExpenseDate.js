// import { useState } from 'react';
import './ExpeneseDate.css';
const ExpenseDate=(props)=>{
const day=props.date.toLocaleString("en-US",{day:"2-digit"})
const month=props.date.toLocaleString("en-US",{month:"long"})
const year=props.date.getFullYear();

// const[update,setUpdate]=useState();

// const datebtn=()=>{
//     setUpdate("updated")
//     console.log(update)
// }
    return(
<div id="date">
    <p>{month}</p>
    <p>{day}</p>
    <p>{year}</p>
    {/* <button onClick={datebtn}>Click Me</button> */}
</div>

    )
}
export default ExpenseDate;