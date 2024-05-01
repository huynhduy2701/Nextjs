import Image from "next/image";
import logo from "../../../public/assets/cropped-Programmics-1-e1611629108241.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FaLinkedinIn } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

import '../../components/style/footer.scss'
import './style.scss'
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="wrapper">
            <div className="wrapper__top">
              <div className="content">
                <div className="content__left">
                  <div className="content__img item1">
                    <Image src={logo} alt="logo" />
                  </div>
                  <div className="textModule item2">
                    <div className="textModule__designInfo">
                      <div className="textModule__info">
                        <h3>Programmics</h3>
                      </div>
                    </div>
                    <div className="textModule__designtitle">
                      <div className="textModule__title">
                        <h3>Service</h3>
                      </div>
                    </div>
                  </div>
                  <div className="content__service item3">
                    <Link href={"#"}>
                      <span>Cloud Services</span>
                    </Link>
                    <Link href={"#"}>
                      <span>Shop</span>
                    </Link>
                    <Link href="#">
                      <span>Contacts</span>
                    </Link>
                  </div>
                </div>
                <div className="content__right">
                 
                  <div className="content__input">
                    <div className="content__title">
                      <h3>Subscribe</h3>
                    </div>
                    <div className="content__formInput">
                      <div className="formInput">
                        <input type="text" placeholder="Enter your mail" />
                        <FaArrowRight className="iconArrow" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper__center">
              <div className="wrapper__content">
                <div className="wrapper__left">
                  <div className="wrapper__icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="wrapper__phone">
                    <a href="tel:919859092222" target="#">
                      +919859092222
                    </a>
                  </div>
                </div>
                <div className="wrapper__right">
                  <div className="wrapper__iconSocial">
                    <Link href={"#"} className="icon_social">
                      <TiSocialFacebook />
                    </Link>
                    <Link href={"#"} className="icon_social">
                      <FaLinkedinIn />
                    </Link>
                    <Link href={"#"} className="icon_social">
                      <ImInstagram />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper__bottom">
              <div className="wrapper_text">
                <p>
                  © 2018-2022. Address: Programmics Private Limited, First
                  Floor, New Rajendra Nagar ,Raipur , Chhattisgarh – 492001
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
