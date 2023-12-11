import React, { useState } from 'react';
import { images } from '../constants';
import { IoIosMenu } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const navItemInfo = [
  { name: 'Home' },
  { name: 'Articles' },
  { name: 'Page' },
  { name: 'Pricing' },
  { name: 'Fag' },
];

const NavItem = ({ name }) => {
  return (
    <li className=" relative group">
      <a href="/" className="px-4 py-2 ">
        {name}
      </a>
      <span className="text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
        /
      </span>
    </li>
  );
};

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);
  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };

  return (
    <section>
      <header className="container mx-auto px-5 flex justify-between py-4 items-center">
        <div>
          <img className="w-16" src={images.Logo} alt="logo"></img>
        </div>
        <div className="z-50">
          {navIsVisible ? (
            <IoIosMenu className="w-6 h-6" onClick={navVisibilityHandler} />
          ) : (
            <IoMdClose className="w-6 h-6" onClick={navVisibilityHandler} />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? 'right-0' : '-right-full'
          } z-[49] flex flex-col w-full justify-center lg:w-full lg:justify-end lg:flex-row fixed top-0 bottom-0  lg:static gap-x-9 items-center`}
        >
          <ul className="flex gap-x-2 font-semibold">
            {navItemInfo.map((item) => {
              return <NavItem key={item.name} name={item.name} />;
            })}
          </ul>
          <button className="border-2 border-blue-500 px-6 py-2 rounded-full text-blue-500 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300">
            Sign in
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
