
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='py-5 bg-indigo-300'>
            <div className=' container mx-auto flex justify-between '>
                <div className=' text-3xl font-bold '><a href="#">logo</a></div>
                <div>
                    <ul className='flex justify-end gap-5 text-xl'>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/allcountries'>all countries</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/carts'>Carts</Link></li>
                        <li><Link to='/form'>Form</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;