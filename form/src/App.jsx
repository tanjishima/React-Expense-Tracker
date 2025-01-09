
import { useState } from 'react'
import './App.css'
import ExpenseList from './Components/ExpenseList'
import ExpenseFilter from './Components/ExpenseFilter';
import ExpenseFrom from './Components/ExpenseFrom';

function App() {
  // const expenses=[
  //   {id:1, catagory:'tour',description: 'Car ', amount: 600},
  //   {id:2, catagory:'tour',description: 'Car Insurance', amount: 100},
  //   {id:3, catagory:'utility-bill',description: 'Car Insurance', amount: 100},
  //   {id:4, catagory:'gas-bill',description: 'Car Insurance', amount: 100},
  // ]
  const catagories = ['tour','utility-bill','personal expense',"gas-bill"];

const[expenses,setExpenses]=useState([
  {id:1, catagory:'tour',description: 'test.. ', amount: 600},
  {id:2, catagory:'tour',description: 'test..', amount: 100},
  {id:3, catagory:'utility-bill',description: 'test..', amount: 100},
  {id:4, catagory:'personal expense',description: 'test..', amount: 100}
])

const [selectedCatagory,setSelectedCatagory]= useState('All');

// onDelete function
function handleDelete(id){
  setExpenses(expenses.filter((expense)=>expense.id!==id));
};

//filter catagory
const filteredExpenses = selectedCatagory === 'All' ? expenses 
: 
expenses.filter((expense) => expense.catagory === selectedCatagory);


  return (
    <>
     <section className='max-w-4xl mx-auto mt-20'>

     <ExpenseFrom onSubmit={(data)=>setExpenses([...expenses,{...data, id:expenses.length+1}])}
      catagories={catagories}
     />

     <ExpenseFilter onSelectedCatagory={(catagory)=>setSelectedCatagory(catagory)}
     catagories={catagories} 
      />

      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete}/>
    </section>
    </>
  )
}

export default App
