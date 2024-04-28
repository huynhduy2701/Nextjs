import imgBanner from '../../../public/assets/imgBannerHelp.png'
import './style.scss'
import Link from 'next/link'
import { BiMessage } from "react-icons/bi";
import { HiArrowLongRight } from "react-icons/hi2";
const BanerHelp=()=>{
    return (
        <div className="">
            <div className='banner'>
                <div className='banner_wrap'>
                    <div className='banner_left'>
                        <div className='banner_icon'>
                            <BiMessage/>
                        </div>
                        <div className='banner_text'>
                            <h3>We’re Here To Help</h3>
                           <p>
                           Businesses today cross borders and regions, so you need
                           </p>
                        </div>
                    </div>
                    <div className='banner_right'>
                        <div className='banner_button'>
                            <Link href={'/'}>
                                <span>
                                    Get help here

                                </span>
                                <HiArrowLongRight/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default BanerHelp