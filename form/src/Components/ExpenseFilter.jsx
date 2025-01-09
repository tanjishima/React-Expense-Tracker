/* eslint-disable react/prop-types */


export default function ExpenseFilter({onSelectedCatagory,catagories}) {

  return (
    <div>
        {/* <select className="select select-bordered  w-full max-w-xs" onChange={(e)=>onSelectedCatagory(e.target.value)}>

     <option value={"All"}>All</option>
     <option value={"tour"}>tour</option>
     <option value={"utility-bill"}>utility-bill</option>
     <option value={"personal expense"}>personal expense</option>
</select> */}

<select 
    className="select select-bordered  w-full max-w-xs select-primary"
    onChange={(e)=>onSelectedCatagory(e.target.value)}
    >
      <option value={"All"}>All</option>
      {
        catagories.map((catagory)=>
        <option key={catagory} value={catagory}>
        {catagory}
        </option>)
      }
 </select>

    </div>
  )
}
