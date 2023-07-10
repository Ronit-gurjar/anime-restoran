import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import UserImg from '../../../public/images/user-image.png';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})
interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
      <div className={poppins.className}>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar__close-button" onClick={toggleSidebar}>
      <i className="fas fa-arrow-left fa-2x"></i>
      </button>
      <div className="sidebar__content">
        <div className="sidebar__image">
          <Image src={UserImg} alt="User" />
          <h1>User</h1>
        </div>
        <div className="sidebar__buttons">
          <button>Order</button>
          <button>Favorite</button>
        </div>
        <div className="sidebar__logout">
          <button>Logout</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;

