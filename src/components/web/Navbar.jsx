import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';
import ShimmerButton from "@/components/magicui/shimmer-button";
import SearchBar from './SearchBar';

const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (
    <div className="absolute top-0 left-0 w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50 bg-white dark:bg-gray-800">
      <div className="w-1/4 h-full text-primary font-bold flex justify-start items-center text-lg">
        <img src='https://toyland.toys/wp-content/uploads/2023/09/4.png'/>
      </div>
      <div className="w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8">
        {
          NavLinks.map((links, index) => (
            <li key={index} className="list-none">
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
        <div className="z-10 flex min-h-[16rem] items-center justify-center">
          
        </div>
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
