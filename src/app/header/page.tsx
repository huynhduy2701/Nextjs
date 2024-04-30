"use client"
import "./style.scss";
import Image from "next/image";
import logo from "../../../public/assets/Copy-of-Copy-of-Programmics.png";
import { RiWhatsappFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
import { Carousel } from "antd";
import img2 from "../../public/assets/imgpeople.png";
import img1 from "../../public/assets/cungtay.png";
import { FaBars } from "react-icons/fa6";
import logoRes from "../../../public/assets/Programmics-1-removebg-preview.png"
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
// import './style/reponsive.scss'
import { usePathname } from 'next/navigation'
import { IoIosArrowDown } from "react-icons/io";
import { redirect, useRouter } from 'next/navigation'
import { showErrorToast, showSuccessToast } from "../erros/erros";
import { ToastContainer } from "react-toastify";
interface User {
  firstName: string;

}
const NavBar = () => {
  const router = useRouter()
  //   const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropAbout, setDropAbout] = useState(false);
  const [dropShop, setDropShop] = useState(false);
  const [isLogin,setIsLogin]=useState(false);
  const [firstName, setFirstName] = useState('');
  const checkIsLogin= localStorage.getItem('token')

  //  const router=useRouter();
  //  const[isHome,setIsHome]=useState(false);
  //  useEffect(()=>{
  //   setIsHome(pathname==="/")
  //  },[pathname])

  const toggleAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Ngăn chặn mặc định của liên kết
    setDropAbout(!dropAbout);
  };
  const toggleShop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setDropShop(!dropShop)
  }
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(()=>{
    if (checkIsLogin) {
      setIsLogin(true);
      // Nếu người dùng đã đăng nhập, lấy thông tin người dùng
      const userData = localStorage.getItem('listUser');
      if (userData) {
        // Phân tích chuỗi JSON để lấy mảng các đối tượng người dùng
        const userList = JSON.parse(userData);
        // Giả sử bạn muốn lấy thông tin từ người dùng đầu tiên trong danh sách
        if (userList.length > 0) {
          // Truy cập vào thuộc tính firstName của người dùng đầu tiên
          const { firstName } = userList[0];
          setFirstName(firstName);
          console.log(firstName);
        }
      }
    }
  },[])
  const handleLogut=()=>{
    localStorage.removeItem('token');
    setIsLogin(false);
    showSuccessToast("Đămg Xuất Thành Công")
    setTimeout(() => {
      router.push('/Login', { scroll: false });
  }, 2000);
  }
  const Navbar = () => {
    useEffect(() => {

      const handleScroll = () => {
        const navbar = document.querySelector('.container');
        if (window.scrollY > 100) {
          navbar?.classList.add('navbarAnimation');
        } else {
          navbar?.classList.remove('navbarAnimation');
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    // ...
  };

  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div>
      <nav className={`sidebar ${isHome ? 'absolute' : 'relative'}`}>
        <div className="container" onChange={NavBar}>
          <div className="menu">
            <div className="menu__left">
              <div className="menu__logo menuNav">
                {isHome ? (

                  <Image src={logo} alt="logo" className="logo1" />
                ) : (

                  <Image src={logoRes} alt="logo" className="logo2" />
                )}
              </div>
            </div>
            <div className="menu__center">
              <div className="menu__content">
                <ul className="menuNav">
                  <li>
                    <Link href={'/'}>
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a href={"/About"} className="navbarABout">
                      About
                      <span onClick={toggleAbout}>
                        <IoIosArrowDown />
                      </span>
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
                          <Link href="whychooseProgrammics">Why choose Programics</Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link href={"/pricingAndPlans"}>
                      Pricing And Plans
                    </Link>
                  </li>
                  <li >
                    <Link href={'/shop'}>
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contact'}>
                      Contacts
                    </Link>
                  </li>
                </ul>


              </div>

            </div>
            <div className="menu__right menuNav">
              <div className="service">
                <Link href={"/"}>
                  <div className="service__icon">
                    <RiWhatsappFill
                      className="service__iconSize"
                      style={{
                        width: "30px",
                        height: "30px",
                        color: "#3b7eff",
                      }}
                    />{" "}
                    {/* Chỉnh sửa class của icon */}
                  </div>
                  <div className="service__question">
                    <h3>Have Any Questions?</h3>
                    <div className="service__number">
                      <p>+919859092222</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="search">
                <div className="search__column">
                  <div className="search__icon">
                    <CiSearch
                      className="search__customicon"
                      style={{ width: "26px", height: "33px", color: "white" }}
                    />
                  </div>
                </div>
              </div>

              <div className="isLoginOrSignup">
                {
                  isLogin ? (
                    <Link href={"#"} onClick={handleLogut}>đăng xuất</Link>

                  ):(

                    <Link href={'/Login'}>Đăng nhập</Link>
                  )
                }
              </div>
              <div>
                  <span className="nameUser">
                  {/* lấy ra firstName khi đăng nhập  ở đây*/}
                  <span>{firstName}</span>
                  </span>
              </div>

            </div>
          </div>
        </div>
      </nav>
      <div className="HeaderMenu">
        {/* menu-reponsive */}
        <div className="menuRespon" style={{ display: "none" }}>
          <div className="menuMobile">
            <div className="logoRes">
              <Image src={logoRes} alt="logo" />
            </div>
            <span className="buttonRes" >
              <FaBars onClick={() => toggleMenu()} />
            </span>
          </div>
        </div>
        {/* menu-lefl-reponsive */}
        <div className={` ${menuOpen ? 'header__mobile-open' : ''}`}>
          {menuOpen && (
            <div className="menu__box header__mobile">
              <div className="menu__boxLogo">
                <Link href="#">
                  <Image src={logoRes} alt="logo" />
                </Link>
              </div>
              <hr />
              <div className="main__menu">
                <ul className="menu__main__2">
                  <li>
                    <Link href="/">
                      Home
                    </Link>
                  </li>
                  <li className="aboutmenu">
                    <Link href="#"  >
                      About
                      <span onClick={toggleAbout}>
                        <IoIosArrowDown />
                      </span>
                    </Link>
                    <ul className={`submenu__reponsive ${dropAbout ? 'submenu__reponsive-show' : ''}`}>
                      <li>
                        <Link href={'/ourteam'}>Our Team</Link>
                      </li>
                      <li>
                        <Link href={'/casestudy'}>Case Study</Link>
                      </li>
                      <li>
                        <Link href={'/mission'}>Mission</Link>
                      </li>
                      <li>
                        <Link href="whychooseProgrammics">Why Choose Programmics</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="#">
                      Pricing And Plans
                    </Link>
                  </li>
                  <li className="btnShop">
                    <Link href="#"  >
                      Shop
                      <span onClick={toggleShop}>
                        <IoIosArrowDown />
                      </span>
                    </Link>
                    <ul className={`submenu__shop ${dropShop ? 'submenu__shop-show' : ""}`}>
                      <li>Cart</li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/">Cart</Link>
                  </li>
                  <li>
                  {
                  isLogin ? (
                    <Link href={"#"} onClick={handleLogut}>đăng xuất</Link>

                  ):(

                    <Link href={'/Login'}>Đăng nhập</Link>
                  )
                }
                  </li>
                </ul>
              </div>
              <div className="menu__boxSearch">
                <div className="searchForm">
                  <input type="text" placeholder="Search..." />
                  <button className="btnIconForm">
                    <IoIosSearch />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>



      <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

    </div>
  );
};
export default NavBar;
