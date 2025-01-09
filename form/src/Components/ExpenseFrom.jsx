/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form"
export default function ExpenseFrom({onSubmit,catagories}) {
    
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    // const onSubmit = (data) => {
    //   console.log(data);
    // };

  return (
    <>
    <div className="heading text-3xl font-bold ">Add  Expense📒</div>
    <form 
    action="" 
    className="flex flex-col gap-4 max-w-[500px]" 
    onSubmit={handleSubmit(onSubmit)}> 

    <input
    type="text"
    placeholder="Description"
    className="input input-bordered input-primary w-full" 
    {...register("description", { required: true,minLength:5 ,maxLength:10}) } 
    />

    {errors.description?.type === "required" && <span className="text-red-500">Description is required</span>}
    
    {errors.description?.type === "minLength" && <span 
    className="text-red-500">Text is so small.Text should be more than 5 characters</span>}

   {errors.description?.type === "maxLength" && <span 
    className="text-red-500">Text is so big.Text should be less than 10 characters</span>}

    <input
    type="number"
    placeholder="Amount"
    className="input input-bordered input-primary w-full "
    {...register("amount", { required: true,maxLength:10}) }
     />

    
   {errors.amount?.type === "required" && <span className="text-red-500">Amount is required</span>}

   {errors.amount?.type === "maxLength" && <span 
    className="text-red-500">Text is so big.Text should be less than 10 characters</span>}
    

    <label htmlFor="catagory" >Choose Catagory</label>

    <select 
    className="select select-bordered  w-full select-primary"
    {...register("catagory", { required: true})}
    >
      {
        catagories.map((catagory)=>
        <option key={catagory} value={catagory}>
        {catagory}
        </option>)
      }
 </select>

  <input  type="submit" value="Add Expense" className="btn btn-secondary w-full  mb-5 " />

    </form>
    <hr className="my-10"/>
    </>
  )
}
