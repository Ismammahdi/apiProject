import { Link } from "react-router-dom";


const Product = ({data}) => {
    const {id,title,price}=data
    return (
        <div className="w-[30%] p-5 border border-indigo-500 mb-5 rounded-lg ">
          <h1>Price:${price}</h1>
          <h2>title: {title}</h2>
          <h2>id:{id}</h2>
          <Link to={`/productdetails/${id}`} className=" py-2 px-5 block mt-4 bg-yellow-500">Details {id}</Link>
        </div>
    );
};

export default Product;