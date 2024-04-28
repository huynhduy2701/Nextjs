import "./style.scss"
import { BiDollar } from "react-icons/bi";
import Link from 'next/link'
const Pricing = ()=>{
    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper_box">
                    <div className="wrapper_top">
                        <div className="wrapper_icon">
                            <BiDollar/>
                        </div>
                        <div className="wrapper_textTitle">
                            <h3>Our Pricing</h3>
                            <div className="wrapper_paragraph">
                                <p>Programmics deliver the best services and quality products at affordable prices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper_bottom">
                        <div className="card">
                            <div className="card_box">
                                <div className="card_header">
                                    <p>Basic</p>
                                </div>
                                <div className="card_body">
                                    <div className="card_text">
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                    </div>
                                    <div className="card_boxPrice">
                                        <div className="card_priceWrap">
                                            <div className="card_priceName">
                                                    <i>$</i>
                                                    <span>
                                                        19
                                                        <sup>99</sup>
                                                    </span>
                                                    <p>month</p>
                                            </div>
                                            <div className="btnPrice">
                                                <Link href={'#'}>
                                                submit
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card_box">
                                <div className="card_header">
                                    <p>Basic</p>
                                </div>
                                <div className="card_body">
                                    <div className="card_text">
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                    </div>
                                    <div className="card_boxPrice">
                                        <div className="card_priceWrap">
                                            <div className="card_priceName">
                                                    <i>$</i>
                                                    <span>
                                                        19
                                                        <sup>99</sup>
                                                    </span>
                                                    <p>month</p>
                                            </div>
                                            <div className="btnPrice">
                                                <Link href={'#'}>
                                                submit
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card_box">
                                <div className="card_header">
                                    <p>Basic</p>
                                </div>
                                <div className="card_body">
                                    <div className="card_text">
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                        <p>aaa</p>
                                    </div>
                                    <div className="card_boxPrice">
                                        <div className="card_priceWrap">
                                            <div className="card_priceName">
                                                    <i>$</i>
                                                    <span>
                                                        19
                                                        <sup>99</sup>
                                                    </span>
                                                    <p>month</p>
                                            </div>
                                            <div className="btnPrice">
                                                <Link href={'#'}>
                                                submit
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Pricing