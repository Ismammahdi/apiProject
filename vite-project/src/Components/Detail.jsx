
import { useLoaderData, useParams } from 'react-router-dom';

const Detail = () => {
    // const {code}=useParams()
    // console.log(code)
    const allcountries=useLoaderData()
    const data=allcountries[0]
    console.log(data)
    const {name,capital,common,official,flags,continents,altSpellings}=data
    return (
        <div className='container mx-auto p-5 w-[400px] border-4 border-green-500'>
            <h2>capital{capital}</h2>
            <img className='object-cover ' src={flags.png} alt="" />
            <h2 >Common:{name.common}</h2>
            <h2>continents:{continents}</h2>
            <h2>altSpellings:{altSpellings[0]}</h2>
            <h2>altSpellings:{altSpellings[1]}</h2>
        </div>
    );
};

export default Detail;