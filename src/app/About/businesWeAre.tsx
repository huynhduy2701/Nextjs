import './style.scss'
import Link from 'next/link'
import { BsClockHistory } from "react-icons/bs";
const BusinissWeAre=()=>{
    return (
        <div className="businissWeAre">
            <div className="containerABout">
                <div className="businissWeAre__wrap">
                    <div className="businissWeAre__boxTop">
                        <div className="businissWeAre__img">
                        </div>
                        <div className="businissWeAre__boxText">
                            <p>Programmics</p>
                            <div className="businissWeAre__contentText">
                                <h3>
                                Who we are
                                </h3>
                                <span className="businissWeAre__line"></span>
                                <div className="businissWeAre__desc">
                                    <p>
                                    <strong>Programmics software product and services</strong>
                                    assure you to deliver a product that will give you the best quality services that will help you to thrive in your business.
                                    Programmics is an Indian company delivering digital Software Services to users. Programmics, Raipur assist and support people who want to change their path-from traditional to digital transformation. Digital transformation has been showing up advancement in technology. Thus, Programmics deliver the latest services to meet up the upcoming trends. Programmics digitally work on your problems with the help of software applications. Programmics use the latest
                                     software technology and provide quality assurance services. 
                                    </p>
                                </div>
                                <Link href={'/'}>
                                    <span>Read More</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='businissWeAre__boxBottom'>
                        <div className='businissWeAre__column'>
                            <div className='businissWeAre__card'>
                                <div className='businissWeAre__icon'>
                                    <BsClockHistory/>
                                </div>
                                <div className='businissWeAre__textBox'>
                                    <h3>
                                    Programmics History
                                    </h3>
                                    <div className='businissWeAre__desc'>
                                        <p>Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information solutions from customized software & application development to e-commerce App Development. Programmics is the first Indian company of Raipur who is provided its services at a minimal cost. Our products are the result of
                                     accepting the transformation change, from industrial to information changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='businissWeAre__column'>
                            <div className='businissWeAre__card'>
                                <div className='businissWeAre__icon'>
                                    <BsClockHistory/>
                                </div>
                                <div className='businissWeAre__textBox'>
                                    <h3>
                                    Programmics History
                                    </h3>
                                    <div className='businissWeAre__desc'>
                                        <p>Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information solutions from customized software & application development to e-commerce App Development. Programmics is the first Indian company of Raipur who is provided its services at a minimal cost. Our products are the result of
                                     accepting the transformation change, from industrial to information changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='businissWeAre__column'>
                            <div className='businissWeAre__card'>
                                <div className='businissWeAre__icon'>
                                    <BsClockHistory/>
                                </div>
                                <div className='businissWeAre__textBox'>
                                    <h3>
                                    Programmics History
                                    </h3>
                                    <div className='businissWeAre__desc'>
                                        <p>Programmics, Raipur is Established in 2018 in Raipur and has pioneered in Information solutions from customized software & application development to e-commerce App Development. Programmics is the first Indian company of Raipur who is provided its services at a minimal cost. Our products are the result of
                                     accepting the transformation change, from industrial to information changes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BusinissWeAre