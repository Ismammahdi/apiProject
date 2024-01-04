import { useLoaderData } from "react-router-dom";


const CartDetails = () => {
    const carts = useLoaderData();
  
    const {products,thumbnail,price,title}=carts;
    return (
        <div className=" mt-10  container mx-auto  border-solid border-4 border-green-600  w-[400px]">
            <img className=" object-cover object-center" src={products[1].thumbnail} alt="" />
            <div className="bg-red-300">
            <h2>Title:{products[1].title}</h2>
            <h2>Price:${products[1].price}</h2>
            </div>
        </div>
    );
};

export default CartDetails;