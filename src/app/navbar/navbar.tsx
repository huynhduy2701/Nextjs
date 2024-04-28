"use client"

import { useEffect, useState } from "react";
import Image from 'next/image'
import logo from '../../../public/assets/Programmics-1-removebg-preview.png'
import './style.scss'
import { FiSearch } from "react-icons/fi";
import Link from 'next/link'
import { IoIosSearch } from "react-icons/io";
import { HiMiniBars3 } from "react-icons/hi2";
import logoRes from "../../../public/assets/Programmics-1-removebg-preview.png"

const NavBarMenu = () => {
  const [menuOpen,setMenuOpen]=useState(false)
 const [dropAbout, setDropAbout] = useState(false);
 const [dropShop,setDropShop]=useState(false);
 
 const toggleAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
   e.preventDefault(); // Ngăn chặn mặc định của liên kết
   setDropAbout(!dropAbout);
  };
  const toggleShop=(e:React.MouseEvent<HTMLAnchorElement>)=>{
    e.preventDefault();
    setDropShop(!dropShop)
  }
 const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};
 

 
  return (
    <div>
        <nav className="navBarSecond">
            <div className="containerNavbar">
                <div className="containerNavbar_wrapNav">
                  <div className="menu">
                      <div className="menu_icon">
                          <Image src={logo} alt="logo"/>
                      </div>
                      <div className="menu_itemMenu">
                          <ul>
                              <li>
                                <Link href={'/'}>
                                Home
                                </Link>
                                </li>
                                <li className="dropdown">
                                    <a href="#" onClick={toggleAbout}>
                                        About
                                    </a>
                                    {dropAbout && (
                                    <ul className="dropdown-menu">
                                        <li>
                                            <Link href={'ourteam'}>Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="casestudy">Case Study</Link>
                                        </li>
                                        <li>
                                            <Link href="mission">Mission</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Why choose Programics</Link>
                                        </li>
                                    </ul>
                                    )}
                                    </li>
                              <li>
                                <Link href={'#'}>
                                Price
                                
                                </Link>
                                </li>
                              <li>
                                <Link href={'#'}>
                                Shop

                                </Link>
                                </li>
                              <li>
                                <Link href={'#'}>
                                Contacts
                                
                                </Link>
                                </li>
                          </ul>
                      </div>
                      <div className="menu_itemSearch">
                            <div className="menu_iconSearch">
                                <FiSearch/>
                            </div>
                      </div>
                  </div>
                </div>
            </div>
        </nav>
        <div className="HeaderMenuSecond">
            <div className="menuRespon">
                <div className="menuRespon_row">
                    <div className="menuRespon_icon">
                        <Image src={logoRes} alt='logo'/>
                    </div> 
                    <div className="menuRespon_iconRight">
                        <HiMiniBars3/>
                    </div>
                </div>
            </div>
        </div>
   </div>
  );
};
export default NavBarMenu;
