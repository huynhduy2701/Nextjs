import "./style/backgrounhv.scss"
import Image from 'next/image'
import Mcolor from '../../public/assets/mhasColor.png'
import Mnocolor from '../../public/assets/mNoColor.png'
import './style/reponsive.scss'
const BackgroundHover=()=>{
    return (
        <div className="background_no_hover">
            <div className="container">
                <div className="wrapImage">
                    <div className="wrapCoLumn">
                        <div className="wrapCoLumn__container">
                            <div className="wrapCoLumn__mainImg">
                                <Image className="wrapCoLumn__hover" src={Mcolor} alt="logo"/>
                                <Image className="wrapCoLumn__Img" src={Mnocolor} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BackgroundHover