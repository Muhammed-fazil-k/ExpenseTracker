import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'
const NewExpense = (props)=>{
    const [isVisible,setIsVisible] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        cancelFormHandler();
    }

    const showInputFormHandler = ()=>{
        setIsVisible(true);
    }

    const cancelFormHandler = ()=>{
        setIsVisible(false);
    }

    return(
        <div className="new-expense">
            {(!isVisible) && <button onClick={showInputFormHandler}>Add Expense</button>}
            {isVisible && <ExpenseForm onCancelForm={cancelFormHandler} onSaveExpenseData= {saveExpenseDataHandler}/>}

        </div>
    );
}

export default NewExpense;