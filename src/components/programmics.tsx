import './style/programmic.scss'
import { GiInspiration } from "react-icons/gi";
import './style/reponsive.scss'
const Programmics =()=>{
    return (
       <div>
             <div className="backgrounProgrammics">
                <div className='programmics'>
                    <div className='programmics__columns'>
                        <div className='programmics__containers'>
                            <div className='programmics__programmicsWrap'>
                                <div className='program__boxText'>
                                    <div className='program__icon'>
                                        <GiInspiration/>
                                    </div>
                                    <div className='program__textInfo'>
                                        <h3>
                                            Programmics Value System
                                            <span className='deviderProgram'></span>
                                        </h3>
                                        <div className='program__contentProgram'>
                                            <p>Programmics value system is based on three parameters</p>
                                            <p>1.Committed to customers: Programmics are always committed to our customers so that we can provide them assured
                                                    and best services followed by the latest and versatile tech systems.</p>
                                            <p>2. Integrity: This is the most affluent and core principle of 
                                                Programmics. The Programmics team is fully dedicated to it.</p>
                                            <p>3. Respect for customers: Respect is what we believe is the right of every customer
                                                    Programmics fully owe it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <div className='backgroundWhite'>
                        
                </div> */}
             </div>
       </div>
    )
}
export default Programmics