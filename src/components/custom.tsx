import './style/custom.scss'
import { LuPenTool } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import Link from 'next/link'
import { RxLapTimer } from "react-icons/rx";
import './style/reponsive.scss'

const Custom = () =>{
    return(
     <div className='custom'>
        <div className='container'>
            <div className='custom_wrap'>
                <div className='custom_contentItem'>
                    <div className='custom_card'>
                        <div className='custom_icon'>
                            <LuPenTool/>
                            <span>1</span>
                        </div>
                        <div className='custom_text'>
                            <h3>Analysis</h3>
                            <p>The Programmics team collect reliable data from primary and authentic sources. Programmics data analyze by a 
                                3-step module system so that Programmics can justify their Software products and services.</p>
                        </div>
                    </div>
                    <div className='custom_card'>
                        <div className='custom_icon'>
                            <LuPenTool/>
                            <span>2</span>
                        </div>
                        <div className='custom_text'>
                            <h3>Analysis</h3>
                            <p>The Programmics team collect reliable data from primary and authentic sources. Programmics data analyze by a 
                                3-step module system so that Programmics can justify their Software products and services.</p>
                        </div>
                    </div>
                    <div className='custom_card'>
                        <div className='custom_icon'>
                            <LuPenTool/>
                            <span>3</span>
                        </div>
                        <div className='custom_text'>
                            <h3>Analysis</h3>
                            <p>The Programmics team collect reliable data from primary and authentic sources. Programmics data analyze by a 
                                3-step module system so that Programmics can justify their Software products and services.</p>
                        </div>
                    </div>
                    <div className='custom_card'>
                        <div className='custom_icon'>
                            <LuPenTool/>
                            <span>
                                <FaCheck/>
                            </span>
                        </div>
                        <div className='custom_text'>
                            <h3>Analysis</h3>
                            <p>The Programmics team collect reliable data from primary and authentic sources. Programmics data analyze by a 
                                3-step module system so that Programmics can justify their Software products and services.</p>
                        </div>
                    </div>
                </div>
                <div className='custom_wrappre--line'>
                    <div className='custom_line'>
                        <span></span>
                    </div>
                </div>
                <div className='custom_button'>
                    <div className='custom_btn'>
                        <Link href={'/'}>
                            <span>
                                <RxLapTimer/>
                                About Our Process
                            </span>    
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     </div>
    )
}

export default Custom