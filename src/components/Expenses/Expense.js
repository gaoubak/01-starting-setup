import react, {useState} from "react";

import "./Expense.css"
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter";


function Expense(props){ 


const [filteredYears, setfilteredYears] =  useState('2020');

const filterChangeHandler = selectedYear => {
    setfilteredYears(selectedYear);
};
const filterExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYears;
});


    return (
        <div>
    
        <Card className="expenses">
        <ExpensesFilter  selected={filteredYears} onChangeFilter={filterChangeHandler} />
        {filterExpenses.length === 0 ? <p>No expense found.</p> : filterExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id} 
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
            />))} 
        </Card>
        </div>
    )

    }

export default Expense;