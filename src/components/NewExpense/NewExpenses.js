import React from "react";

import ExpensesForm from "./ExpensesForm";
import './NewExpenses.css';

const NewExpense = (props) =>{
    const onSaveExpenseDatahandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
    <ExpensesForm  onSaveExpenseData={onSaveExpenseDatahandler}/>
    </div>
};

export default NewExpense;