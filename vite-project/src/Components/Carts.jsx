import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";




const Carts = () => {

   const carts = useLoaderData()
   const allCarts = carts.carts
   console.log(allCarts)


    return (
        <div className="container mx-auto flex justify-between flex-wrap p-5">
            {
              allCarts.map((cart, i)=><Cart key={i} cart={cart}></Cart>)  
            }
        </div>
    );
};
export default Carts;