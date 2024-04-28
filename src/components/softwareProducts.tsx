import './style/software.scss'
import img1 from '../../public/assets/stair.png'
import img2 from '../../public/assets/hangout.png'
import Image from 'next/image'
import { FaMedal } from "react-icons/fa";
import Link from 'next/link'
import building from '../../public/assets/building.png'
import { FaPiggyBank } from "react-icons/fa";
import './style/reponsive.scss'
const SoftwareProducts = ()=>{
    return (
        // <div className='SoftwareProductsContainer'>
        //     <div className="SoftwareProducts">
        //         <div className="Software">
        //             <div className="Software__imgSF imgMobieSf">
        //                 <Image src={img1} alt='logo'/>
        //             </div>
        //             <div className='Software__content'>
        //                <div className='Software__textBoxSF'>
        //                     <div className='Software__wrapperSF'>
        //                         <div className='Software__iconSF'>
        //                             <FaMedal/>
        //                         </div>
        //                         <div className='Software__infoSF'>
        //                             <h3>Programmics Software Products and Services</h3>
        //                             <div className='software__pagam'>
        //                                 <p>
        //                                     Programmics offer products that are highly efficient and compatible with industry standards. The 
        //                                 <strong> Software products </strong>
        //                                 offered are examined and tested by professionally certified technicians. Programmics excels in Services like Web Development, Digital Marketing, Customized Software Development,
        //                                 App Development, Augmented Reality, Magneto Development, and e-commerce app development. Also, the 
        //                                 <strong> Software Services </strong>
        //                                 provided are about 10% cost-effective than the prevailing market prices. Hence,
        //                                 Programmics delivers cost-effective and highly analyzed qualitatively Software products.
        //                                 </p>
        //                             </div>
        //                             <Link className='btnSF' href={'/'}>
        //                                 <span>Read More</span>
        //                             </Link>
        //                         </div>
        //                     </div>
        //                </div>
        //             </div>
        //             <div className="Software__imgSF imgMobieSf">
        //                 <Image src={img2} alt='logo'/>
        //             </div>
        //             <div className='Software__content mobileContenSF'>
        //                 <div className="Software__imgSF mobileImg4">
        //                     <Image src={building} alt='logo'/>
        //                 </div>
        //                 <div className='Software__boxTextsf'>
        //                     <div className='wrapTextSf'>
        //                         <div className='iconpig'>
        //                             <FaPiggyBank/>
        //                         </div>
        //                         <div className='Software__textsorf'>
        //                             <h3>Programmics Customer Problem-Solving Process</h3>
        //                             <div className='Software__textSfWrap'>
        //                                 <p>Programmics have designed a problem-solving mechanism that helps understand the customers’ problems and resolve them in no time. Programmics excels in Software Services like Web Development, Digital Marketing, Customized Software Development, Application Development, Augmented Reality, Magneto Development, and e-commerce app development. Programmics, Raipur has created an innovative ecosystem for customers’ problem-solving.
        //                                     Programmics take their customer’s problems on the highest priority and settle them in a reasonable time.</p>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className='containerSofware'>
            <div className='containerSofware__child'>
                <div className='containerSofware__imgSoftware'>
                    <Image src={img1} alt='logo'/>
                </div>
                <div className='containerSofware__boxTextSoftware'>
                    <div className="containerSofware__boxSoftware">
                        <div className='containerSofware__iconBoxSoft'>
                            <FaMedal/>
                        </div>
                        <div className='containerSofware__boxTextSoft'>
                            <h3>
                            Programmics Software Products and Services
                            </h3>
                            <div className='containerSofware__paragraph'>
                                <p>
                                    Programmics offer products that are highly efficient and compatible with industry standards. The 
                                        <strong>Software products</strong>
                                        offered are examined and tested by professionally certified technicians. Programmics excels in Services like Web Development,
                                         Digital Marketing, Customized Software Development, App Development, Augmented Reality, Magneto Development, and e-commerce app development. Also, the 
                                         <strong>Software Services</strong>
                                         provided are about 10% cost-effective than the prevailing market prices. Hence, Programmics delivers cost-effective and highly analyzed qualitatively Software products. 

                                </p>  

                                
                            </div>
                            <div className='containerSofware_button'>
                               <div className='containerSofware_btn'>
                                    <span>
                                            Read More
                                        </span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='containerSofware__imgSoftware'>
                    <Image src={img1} alt='logo'/>
                </div>
                <div className='containerSofware__boxTextSoftware'>
                    <div className="containerSofware__boxSoftware">
                        <div className='containerSofware__iconBoxSoft'>
                            <FaMedal/>
                        </div>
                        <div className='containerSofware__boxTextSoft'>
                            <h3>
                            Programmics Software Products and Services
                            </h3>
                            <div className='containerSofware__paragraph'>
                                <p>
                                    Programmics offer products that are highly efficient and compatible with industry standards. The 
                                        <strong>Software products</strong>
                                        offered are examined and tested by professionally certified technicians. Programmics excels in Services like Web Development,
                                         Digital Marketing, Customized Software Development, App Development, Augmented Reality, Magneto Development, and e-commerce app development. Also, the 
                                         <strong>Software Services</strong>
                                         provided are about 10% cost-effective than the prevailing market prices. Hence, Programmics delivers cost-effective and highly analyzed qualitatively Software products. 

                                </p>  

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SoftwareProducts