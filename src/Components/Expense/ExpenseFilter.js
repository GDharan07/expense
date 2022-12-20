import "./ExpenseFilter.css";
// import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";
const ExpenseFilter=(props)=>{

    

    return(
        <div id="filter">
            <p>Filter By Year</p>
            <select onChange={props.valueChange} valuee={props.filterYear}>
                <option value="select Year">Select Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}
export default ExpenseFilter;