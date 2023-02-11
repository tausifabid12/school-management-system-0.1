import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <header className="py-2">
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="/" aria-label="Home">
              <p className="h-10 w-auto">logo</p>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/">home</Link>

              <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="admission">Admission</Link>

              <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="about">about</Link>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <Link className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" to="/login">Sign in</Link>
            </div>
            <button >

            </button>
            <div className="-mr-1 md:hidden">
              {/* <MobileNavigation /> */}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Navbar;
