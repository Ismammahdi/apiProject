
import { useLoaderData,  } from 'react-router-dom';

const ProductDetails = () => {
    // const {details}=useParams();
    // console.log(details)
    const datas=useLoaderData()
     const {brand,price,images}=datas
    return (
        <div className=' mt-10  container mx-auto  border-solid border-4 border-green-600  w-[400px] p-5 '>
            <h1>brand :{brand}</h1>
            <h2>Price :{price}</h2>
            <img className='object-cover object-top h-[400px]' src={images[0]} alt="" />
            
        </div>
    );
};

export default ProductDetails;