import './style/RaipurHelp.scss'
import { BsQuestionOctagon } from "react-icons/bs";
import Link from 'next/link'
import './style/reponsive.scss'
const RaipurHelp=()=>{
    return (
        <div className="containerRaihelp">
            <div className="RailHelp">
                <div className="RailHelp__content">
                    <div className="RailHelp__right">
                       <div className='RailHelp__icon'>
                            <BsQuestionOctagon/>
                       </div>
                       <div className="RailHelp__textRailHelp">
                            <h3>Programmics, Raipur is Here to help you</h3>
                            <div className='RailHelp__desRailHelp'>
                                <p>Programmics, Raipur has helped a lot of businesses to find their perfect Software Solutions. Programmics, Raipur Provides their software services in Web Development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development,
                                     and e-commerce app development. If you need our help, Programmics is one call away 
                                     from you.
                                </p>
                                <p>You can also reach Programmics at the below address. <br />
First Floor, Jain Software, Jain Dental Hospital, Raipur.</p>
                            </div>
                       </div>

                    </div>
                    <div className="RailHelp__left">
                        <Link className='btnSF' href={'/'}>
                                        <span>Read More</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RaipurHelp