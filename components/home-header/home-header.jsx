import React from 'react';
import { FiShoppingCart } from "react-icons/fi"

const HomeHeader = () => {
  return (
    <div className="w-full p-5 flex items-center">
        <div className="flex-grow flex h-full items-center">
            <input className="lg:w-1/3 md:w-1/2 w-full outline-none border-2 border-primary-dark dark:border-primary-light rounded-lg h-full px-4 py-2 placeholder:text-primary-grey bg-secondary-light dark:bg-secondary-dark text-primary-orange font-fira-code focus:border-primary-orange focus:dark:border-primary-orange" placeholder="Enter a keyword" />
        </div>
        <button className="p-2 mx-2 text-primary-orange">
          {/* TODO: Complete the icon showing the number of items on the cart */}
          <FiShoppingCart size={25} color="#FC5A31" />
        </button>
    </div>
  );
};

export default HomeHeader;