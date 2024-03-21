import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Header() {
    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/' className='text-slate-500 hover:text-slate-700'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Ashraf</span>
            <span className='text-slatte-700'>Estate</span>
            
            </h1> 
            </Link>
<form className='bg-slate-100 p-3 rounded-lg flex items-center'>

    <input type='search' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
    <FaSearch className='text-slate-600' />

</form>

<ul className='flex gap-4'>
    <li>
        <a href='/' className='hidden sm:inline text-slate-700 hover:text-slate-900'>Home</a>
    </li>
    <li>
        <a href='/about' className='hidden sm:inline text-slate-500 hover:text-slate-700'>About</a>      
    </li>
    <li>
        <a href='/signin' className='text-slate-500 hover:text-slate-700'>Sign In</a>   
    </li>
   



    </ul>
            </div>
        </header>
    )
}
