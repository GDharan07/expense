import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";

const Expense=(props)=>{
    // const year=props.array;
    const [filterYear,setFilterYear]=useState("select Year")

function valueChange(e){
setFilterYear(e.target.value)
}

const filterdYear=props.array.filter((fillter)=>{
   return  fillter.date.getFullYear().toString() === filterYear;
})
   
   
   return(
     
     
     <div>
<ExpenseFilter valueChange={valueChange} filterYear={filterYear}/>
 {filterYear === "select Year" ? (props.array.map((mappedarray,index)=>(<ExpenseItem exe={mappedarray} key={index} del={props.del}/>))) : (

    filterdYear.length===0 ?(<h1>No Expense Found</h1>) : (filterdYear.map((arrayItems)=>(
    <ExpenseItem exe={arrayItems}/>
))))}
   
{/* {filterdYear.map((arrayItems)=>(
    <ExpenseItem exe={arrayItems}/>
))} */}
{/* <ExpenseItem exe={props.array[0]}/>
    <ExpenseItem exe={props.array[1]}/> */}
</div>

    )
}
export default Expense;
