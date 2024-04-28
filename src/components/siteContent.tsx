import "./sitecontent/style.scss";
import { TbTargetArrow } from "react-icons/tb";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiVector } from "react-icons/bi";
import { LiaToolsSolid } from "react-icons/lia";
import { IoCubeOutline } from "react-icons/io5";
import './style/reponsive.scss'
const SiteContent=()=>{
    return (
        <div className='containerSite'>
            <main className='main'>
                <div className='main__content'>
                    <div className='main__top'>
                        <div className='main__wrapper'>
                            <div className="main__conten1">
                                  <div className="milestone">
                                    <div className="milestone__wrapper ">
                                            <div className="milestone__icon">
                                                <TbTargetArrow/>
                                            </div>
                                            <div className="milestone__count">
                                                <span>524 <sup>+</sup></span>
                                            </div>
                                            <div className="milestone__text">
                                                <p>524+ Information technology Software Projects efficiently delivered to the clients by Programmics</p>
                                            </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="main__conten1">
                                  <div className="milestone">
                                    <div className="milestone__wrapper ">
                                            <div className="milestone__icon2">
                                                <BiVector/>
                                            </div>
                                            <div className="milestone__count">
                                                <span>524 <sup>+</sup></span>
                                            </div>
                                            <div className="milestone__text">
                                                <p>524+ Information technology Software Projects efficiently delivered to the clients by Programmics</p>
                                            </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="main__conten1">
                                  <div className="milestone">
                                    <div className="milestone__wrapper ">
                                            <div className="milestone__icon">
                                                <IoCubeOutline/>
                                            </div>
                                            <div className="milestone__count">
                                                <span>524 <sup>+</sup></span>
                                            </div>
                                            <div className="milestone__text">
                                                <p>524+ Information technology Software Projects efficiently delivered to the clients by Programmics</p>
                                            </div>
                                    </div>
                                  </div>
                            </div>
                            <div className="main__conten1">
                                  <div className="milestone">
                                    <div className="milestone__wrapper ">
                                            <div className="milestone__icon3">
                                                <TbTargetArrow/>
                                            </div>
                                            <div className="milestone__count">
                                                <span>524 <sup>+</sup></span>
                                            </div>
                                            <div className="milestone__text">
                                                <p>524+ Information technology Software Projects efficiently delivered to the clients by Programmics</p>
                                            </div>
                                    </div>
                                  </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__bottom'>
                        <div className="contentSite">
                            <div className="contentSite__left">
                                <div className="contentSite__icon">
                                    <RiLightbulbFlashLine/>
                                </div>
                                <div className="contentSite__text">
                                    <h3>
                                    Software innovation, like almost every other kind of innovation, requires the ability to collaborate and share ideas with other people, 
                                    and to sit down and talk with customers and get their feedback and understand their needs.
                                    </h3>
                                    <div className="contentSite__author">
                                        Bill Gates
                                    </div>
                                </div>
                            </div>
                            <div className="contentSite__right">
                            {/* <div className="contentSite__icon">
                                    <RiLightbulbFlashLine/>
                                </div> */}
                                <div className="contentSite__text">
                                    <p>
                                        <strong>Programmics</strong>
                                        have designed a unique problem-solving mechanism that helps to understand the problem of our customers and resolve them at progressive speed in the field of Web Development, Digital Marketing,
                                         Customized Software Development, App Development, Augmented Reality, Magneto Development, and e-commerce app development. 
                                         <strong>Programmics</strong>
                                         have created an innovative ecosystem to resolve end-user problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )

}

export default SiteContent;