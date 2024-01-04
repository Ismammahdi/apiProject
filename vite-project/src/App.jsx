
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import LayoutOne from './assets/Layouts/LayoutOne';
import Home from './assets/Pages/Home';
import AllCountries from './assets/Pages/AllCountries';
import Detail from './Components/Detail';
import Products from './Components/Products';
import ProductDetails from './Components/ProductDetails';
import Carts from './Components/Carts';
import Formregistration from './Components/Formregistration';
import CartDetails from './Components/CartDetails';


function App() {
 
const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<LayoutOne></LayoutOne>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/allcountries',
          element:<AllCountries></AllCountries>,
          loader: async () => {
            return fetch(`https://restcountries.com/v3.1/all`);
          },
        },
        {
          path:'/detail/:code',
          element:<Detail></Detail>,
          loader: async ({params}) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${params.code}`);
          },
        },
        {
          path:'/products',
          element:<Products></Products>,
          loader: async () => {
            return fetch(`https://dummyjson.com/products`);
          },
        },
        {
          path:'/productdetails/:details',
          element:<ProductDetails></ProductDetails>,
          loader: async ({params}) => {
            return fetch(`https://dummyjson.com/products/${params.details}`);
          },
        },
        {
          path:'/carts',
          element:<Carts></Carts>,
          loader:async()=>{
            return fetch(`https://dummyjson.com/carts`)
          },
        },
        {
          path:'/cartdetails/:details',
          element:<CartDetails></CartDetails>,
          loader:async({params})=>{
            return fetch(`https://dummyjson.com/carts/${params.details}`)
          },
        },
        {
          path:'/form',
          element:<Formregistration></Formregistration>,
        },
        
      ]
    }
  ]
)
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
