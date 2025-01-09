/* eslint-disable react/prop-types */




export default function ExpenseList({expenses,onDelete}) {
 

  return (
    <>
   <div className="overflow-x-auto max-w-[900px] mx-auto">

  <table className="table">
    {/* head */}
    <thead>
      <tr className="text-primary text-2xl font-bold">
        <th>Id</th>
        <th>Catagory</th>
        <th>Description</th>
        <th>Amount</th>
      </tr>
    </thead>
    <tbody>
        {/* show data */}
        {
          expenses.length === 0 ? (
            <tr >
               <td colSpan="5" className="text-2xl text-primary font-bold text-center">
                No Data Found
                </td>
            </tr>
          ):
          expenses.map((expense)=>
            (
              <tr key={expense.id} className="font-bold border-1 border-sky-100/10">
              <td>{expense.id}</td>
              <td>{ expense.catagory}</td>
              <td>{ expense.description}</td>
              <td>${ expense.amount}</td>
              <td><button className="btn btn-primary font-bold" onClick={()=>onDelete(expense.id)}>Delete</button></td>
            </tr>
            
            )
            
          )
        }
    
    </tbody>
     <tfoot className="border-1 border-sky-100/10">
      <tr>
        <td></td>
        <td></td>
        <td className="font-bold text-2xl text-primary">Total</td>
        <td className="font-bold text-2xl text-primary">${expenses.reduce((prev, expense) => prev + Number(expense.amount), 0)}</td>
        <td></td>
      </tr>
    </tfoot> 
  </table>
</div>

    </>
  )
}
