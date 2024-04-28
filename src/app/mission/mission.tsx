import './style.scss'
import Image from 'next/image'
import imgMiss from '../../../public/assets/imgMission.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Mission=()=>{
    return (
        <div className="container">
            <div className='mission'>
                <div className='mission_wrap'>
                    <div className='mission_boxText'>
                       <div className='mission_text'>
                            <h3>
                                Our Commitment
                            </h3>
                            <span>Suspendisse potenti. Quisque risus sem, volutpat a sapien et, mattis</span>
                       </div>
                       <div className='mission_desc'>
                           <div className='mission_descText'>
                                <p>
                                    Far far away, behind the word mountains
                                    </p>
                                    <p>
                                    Far far away, behind the word mountains
                                    </p>
                                    <p>
                                    Far far away, behind the word mountains
                                    </p>
                           </div>
                       </div>
                    </div>
                    <div className='mission_boxImg'>
                       <div className='mission_imgMiss'>
                            <Image src={imgMiss} alt=''/>
                       </div>
                    </div>
                    <div className='mission_boxImg'>
                       <div className='mission_imgMiss'>
                            <Image src={imgMiss} alt=''/>
                       </div>
                    </div>
                    <div className='mission_boxText'>
                       <div className='mission_text'>
                            <h3>
                            Our Culture
                            </h3>
                            <span>Suspendisse potenti. Quisque risus sem, volutpat a sapien et, mattis</span>
                       </div>
                       <div className='mission_desc'>
                            <div className='mission_descText'>
                                <p>
                                Far far away, behind the word mountains
                                </p>
                                <p>
                                Far far away, behind the word mountains
                                </p>
                                <p>
                                Far far away, behind the word mountains
                                </p>
                            </div>
                            <div className='mission_button'>
                                <div className='mission_btn'>
                                    <span>
                                         Read More 
                                         <FaArrowRightLong/>
                                    </span>
                                </div>
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Mission