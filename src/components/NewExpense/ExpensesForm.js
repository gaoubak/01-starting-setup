import React , {useState} from 'react';
/* import { useSyncExternalStore } from 'react/cjs/react.production.min';
 */
import './ExpensesForm.css'

const ExpensesForm = (props) => {
     const [enteredTiTle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('') 
   /*  const[userInput, setUserInput] = useState({
        enteredTiTle:'',
        setEnteredAmount:'',
        setEnteredDate:''
        
    });
 */
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
      /*   setUserInput({
            ...userInput,
            enteredTiTle:event.target.value
        }); */
       /*  setUserInput((prevState)=>{
            return { ...prevState, enteredTiTle:event.target.value}
        }) */
    };

    const amountChangeHandler = (event) =>{
     setEnteredAmount(event.target.value) 
       /* setUserInput({
        ...userInput,
        setEnteredAmount:event.target.value
    }); */
    };

    const dateChangeHandler = (event) =>{
      setEnteredDate(event.target.value)
      /* setUserInput({
        ...userInput,
        setEnteredDate:event.target.value
        
    });*/
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTiTle,
            amout: enteredAmount,
            date: new Date(enteredDate),

        }
        props.onSaveExpenseData(expenseData); 
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');

    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={enteredTiTle} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date'min='2000-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'> Add Expense</button>
        </div>
    </form>
    )
}

export default ExpensesForm;