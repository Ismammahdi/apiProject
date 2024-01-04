import { NavLink } from "react-router-dom";

const Cart = ({ cart }) => {
    
    const { products, discountedTotal, total, totalProducts, totalQuantity, userId, id,price,thumbnail } = cart;


    return (
        <div className="cartpage w-[32%] bg-indigo-800 text-white mb-5 p-4 rounded-lg">
            {/* Display various details about the cart */}
            <h2>discountedTotal: {discountedTotal}</h2>
            <h2>total: {total}</h2>
            <h2>totalProducts: {totalProducts}</h2>
            <h2>totalQuantity: {totalQuantity}</h2>
            <h2>userId: {userId}</h2>
            
            {/* Displaying price for a specific product without mapping */}
            <h2>Product Price:{ products[0].price}</h2>
            <img className="object-cover object-top w-full h-[200px]" src= {products[0].thumbnail} alt="Product Thumbnail" />
            
            <NavLink to={`/cartdetails/${id}`} className=" py-2 px-5 bg-[#11009E] rounded-lg block mt-5 text-center text-[#4CB9E7] font-bold">Show details</NavLink>
        </div>
    );
};

export default Cart;
