import './style.scss'
import Image from 'next/image'
import img1 from '../../../public/assets/mNoColor.png'
const MisstionLogo=()=>{
    return (
        <div className="container">
            <div className="missionLogo">
                <div className="missionLogo_wrap">
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>
                    <div className='missionLogo_card'>
                        <Image src={img1} alt='logo'/>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default MisstionLogo