import { Link } from "react-router-dom";


const SingleCountry = ({allcountrie}) => {
    const {name,capital,region,cca2}=allcountrie
    return (
      
            <div className="w-[30%] mb-7 p-5 border border-blue-500 rounded-lg">
                <h2 className="text-xl font-bold text-indigo-600">common :{name.common}</h2>
                <h2 className="text-xl font-bold text-indigo-600">offecial name: {name.official}</h2>
                <h2 className="text-xl font-bold text-indigo-600">Capital :{capital}</h2>
                <h2 className="text-xl font-bold text-indigo-600">Region: {region}</h2>
                <Link to={`/detail/${cca2}`} className="w-full block py-2 px-5 bg-yellow-500 mt-4 text-center"> Details {cca2}</Link>
            </div>
        
    );
};

export default SingleCountry;