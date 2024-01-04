import { useLoaderData } from "react-router-dom";
import Product from "./Product";



const Products = () => {
const datas=useLoaderData()
const alldatas=datas.products

    return (
        <div>
           <h2 className="mx-auto text-center text-2xl text-red-500 font-bold"> All products</h2>
           <div className=" container mx-auto flex justify-between flex-wrap">
           
           {
             alldatas.map((data,i)=><Product key={i} data={data}> </Product>)
        
           }
           </div>
        </div>
    );
};

export default Products;