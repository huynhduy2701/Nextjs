import Link from 'next/link'
import Image from 'next/image'
import woman from '../../../public/assets/woman.png'
import logoS from '../../../public/assets/logoS.png'
import logoasync from '../../../public/assets/logoasync.png'
import cungtay from '../../../public/assets/cungtay.png'
import manword from '../../../public/assets/menwork.png'
import education from '../../../public/assets/education.png'
import { RxBackpack } from "react-icons/rx";
import './reponsive.scss'
const CaseStudy=()=>{
    return (
        <div className=''>
        <div className='fluid'>
            <div className='box'>
                    <div className='columnCase'>
                        <div className='contentBox'>
                            <div className='contentBox__top'>
                                <div className='contentBox__icon'>
                                    <RxBackpack/>
                                </div>
                                <div className='contentBox__Text'>
                                    <h3>
                                        Case Studies
                                        <span className='contentBox__linebottom'></span>
                                    </h3>
                                    <div>
                                        <p>
                                        Programmics Case Studies will help to understand our Problem-solving 
                                        methods and how Programmics help customers by providing them better services.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='contentBox__bottom'>
                                <div className='boxCard'>
                                    <div className='card'>
                                        <div className='card__box'>
                                            <div className='card__header'>
                                                <Link href={'/'}>
                                                    <Image src={woman} alt='logo'/>
                                                </Link>
                                                <div className='card__logoMini'>
                                                    <Image src={logoS} alt=''/>
                                                </div>
                                            </div>
                                            <div className='card__body'>
                                                <Link href={'/'} className='title'>
                                                    <h5>Agriculture Industry</h5>
                                                </Link>
                                                <div className='card__content'>
                                                    
                                                    Programmics resolved the problems that were faced by Agro-based products ltd 
                                                    by providing them progressive approach-based application software.
                                                </div>
                                                <div className='card__button'>
                                                    <Link href={'/'}>
                                                        <span>
                                                            Read More
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card__box'>
                                            <div className='card__header'>
                                                <Link href={'/'}>
                                                    <Image src={cungtay} alt='logo'/>
                                                </Link>
                                                <div className='card__logoMini'>
                                                    <Image src={logoasync} alt=''/>
                                                </div>
                                            </div>
                                            <div className='card__body'>
                                                <Link href={'/'} className='title'>
                                                    <h5>Agriculture Industry</h5>
                                                </Link>
                                                <div className='card__content'>
                                                    
                                                    Programmics resolved the problems that were faced by Agro-based products ltd 
                                                    by providing them progressive approach-based application software.
                                                </div>
                                                <div className='card__button'>
                                                    <Link href={'/'}>
                                                        <span>
                                                            Read More
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='card__box'>
                                            <div className='card__header'>
                                                <Link href={'/'}>
                                                    <Image src={manword} alt='logo'/>
                                                </Link>
                                                <div className='card__logoMini'>
                                                    <Image src={education} alt=''/>
                                                </div>
                                            </div>
                                            <div className='card__body'>
                                                <Link href={'/'} className='title'>
                                                    <h5>Agriculture Industry</h5>
                                                </Link>
                                                <div className='card__content'>
                                                    
                                                    Programmics resolved the problems that were faced by Agro-based products ltd 
                                                    by providing them progressive approach-based application software.
                                                </div>
                                                <div className='card__button'>
                                                    <Link href={'/'}>
                                                        <span>
                                                            Read More
                                                        </span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='caseStudy__text'> 
                                 <p>Our Managed IT services will help you succeed. <Link href={'/'}>Let’s get started</Link></p>
                            </div>
                        </div>
                    </div>
            </div>

        </div>
    </div>
    )
}
export default CaseStudy