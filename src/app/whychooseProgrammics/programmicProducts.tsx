import './style.scss'
import './reponsive.scss'
import Link from 'next/link'
import './reponsive.scss'
const ProgrammicsProducts=()=>{
    return(
        <div className="product">
            <div className="containerWhy">
                <div className='product__wrap'>
                    <div className='product__contentBox'>
                        <div className='product__infoProduct item1'>
                            <h3>Programmics</h3>
                            <div className='product__contentProduct'>
                                <h3>
                                Why do Customers Choose Programmics Services and Products?
                                </h3>
                                <p>
                                1. Competitive and fair rates for software technology Services.
                                </p>
                                <p>
                                2. Programmics have a proven track of great Success Stories.
                                </p>
                                <p>
                                3. Programmics have a great pool of excellent and talented technical team that ensures to provide effluent services.
                                </p>
                                <p>
                                4. Rigorous testing of the projects before “Go-Live.”
                                </p>
                                <p>
                                5. Programmics Provides Cost-effective Information Technology Solutions to the clients based on their requirements and needs.
                                </p>
                            </div>
                            <Link href={'/'}>
                                <span>Read More</span>
                            </Link>
                        </div>
                        <div className='product__imgProduct item2'>
                                
                        </div>
                    </div>
                    <div className='product__columnInfo'>
                        <div className='product__leftInfo'>
                            <div className='product__columnChartInfo'>
                                <p>Projects completed before time</p>
                                <div className='product__line'>
                                    <span className='product__lineChart product--lindOne'>
                                        <span>76%</span>
                                    </span>
                                </div>
                            </div>
                            <div className='product__columnChartInfo product--second'>
                                <p>Investment in Research and Technology</p>
                                <div className='product__line'>
                                    <span className='product__lineChart product--lineSecond'>
                                        {/* <span>76%</span> */}
                                    </span>
                                </div>
                            </div>
                            <div className='product__columnChartInfo'>
                                <p>Speculation cost on Quality Assurance</p>
                                <div className='product__line'>
                                    <span className='product__lineChart product--third'>
                                        {/* <span>76%</span> */}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='product__rightInfo'>
                            <div className='product__textBox'>
                                <div className='product__contentProduct'>
                                    <h3>
                                    Why Programmics is best as your technology partner
                                    </h3>
                                    <div className='product__desc'>
                                        <p>
                                        Programmics is your best technology partner due to the fact, Programmics has excellent Research and Services. The progress bar can tell you the competency and precision of the Programmics efforts. Programmics are well-known for their timely provided services. Programmics have delivered most of their products before the timeline.
                                         Programmics have extensively invested in technology and research. Hence, Programmics products are exceptional and phenomenal.
                                        </p>
                                    </div>
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
        </div>
    )
}
export default ProgrammicsProducts