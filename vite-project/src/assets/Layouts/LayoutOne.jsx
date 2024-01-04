
import Navbar from '../../Components/Navbar';
import { Outlet } from 'react-router-dom';

const LayoutOne = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <p className=' py-10 bg-black text-white flex justify-center items-center'>&copyright</p>
        </div>
    );
};

export default LayoutOne;