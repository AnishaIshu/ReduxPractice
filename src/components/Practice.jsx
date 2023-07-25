import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  { fetchProducts } from "./Product";

const Practice = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const renderProducts = () => {
    if (product.isLoader) {
      return <p className="text-center mt-5 text-3xl font-bold">Loading....</p>
    }
    if (product.isError) {
      return <p  className="text-center mt-5 text-3xl font-bold">Error occurred while fetching data.</p>
    }
    if (product.data){
      return product.data.map((item) => (
        <div key={item.id} className="border p-4 mb-4">
          <h2 className="text-xl font-semibold">{item.date}</h2>
          <p>{item.description}</p>
        </div>
      ))
    }
    return null;
  }
  console.log(product)
  return (
    <div>
      <h1 className='text-center text-4xl font-semibold'>Async Thunk</h1>
      <div className='flex justify-center mt-10'>
        <button
          className='bg-slate-200 px-5 hover:bg-slate-300 py-2'
         onClick={() => {dispatch(fetchProducts())}}>Click Me</button>
      </div>

      <div>{renderProducts()}</div>
    </div>
  );
};
export default Practice;
