import './style.scss'
import { FaArrowsToEye } from "react-icons/fa6";
import { FaChartLine } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { SiSocialblade } from "react-icons/si";
import './reponsive.scss'
const BannerProgram=()=>{
    return (
        <div className='banner'>
            <div className='containerWhy'>
                <div className='banner__wrap'>
                    <div className='banner__column '>
                        <div className='banner__card'>
                            <div className='banner__icon'>
                                <FaArrowsToEye/>
                            </div>
                            <div className='banner__box'>
                                <div className='banner__title'>
                                    <h3>
                                    Custom Based Solution
                                    </h3>
                                    <p>
                                    Provides integrated and comprehensive IT software custom based solution.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='banner__card'>
                            <div className='banner__icon'>
                                <FaChartLine/>
                            </div>
                            <div className='banner__box'>
                                <div className='banner__title'>
                                    <h3>
                                    Accountability
                                    </h3>
                                    <p>
                                    Highly dedicated and accountable to our client’s requisite needs and demands.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='banner__card'>
                            <div className='banner__icon'>
                                <IoIosPeople/>
                            </div>
                            <div className='banner__box'>
                                <div className='banner__title'>
                                    <h3>
                                    Adaptability
                                    </h3>
                                    <p>
                                    Prompt adaptivity for modern and innovative advanced software-based technologies.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='banner__card'>
                            <div className='banner__icon'>
                                <SiSocialblade/>
                            </div>
                            <div className='banner__box'>
                                <div className='banner__title'>
                                    <h3>
                                    Striving Expectations
                                    </h3>
                                    <p>
                                    Endeavor to deliver the services above and beyond customer expectations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BannerProgram