
import { useLoaderData } from "react-router-dom";
import SingleCountry from "../../Components/SingleCountry";


const AllCountries = () => {
    const allcountries=useLoaderData()
    console.log(allcountries)
    return (
        <>
            <h2 className="text-center m-5 font-bold text-xl text-red-600">All countries</h2>
            <div className=" container mx-auto flex justify-between flex-wrap ">
                {
                    allcountries.map((allcountrie,i)=><SingleCountry key={i} allcountrie={allcountrie}> </SingleCountry>)
                }
            </div>
        </>
    );
};

export default AllCountries;