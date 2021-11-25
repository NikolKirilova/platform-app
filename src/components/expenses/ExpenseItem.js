import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem(props){
    let title = props.title;

    const clickHandler = () => {
        console.log('clicked');
    }
    
    return (

        <Card className="expense-item">
           <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
        )
}


export default ExpenseItem;