'use client'
import { GoPlus } from "react-icons/go";
import './style.scss'
import { useState } from "react";
import './reponsive.scss'

const Faq=()=>{
    const [openDescLeft,setOpenDescLeft]=useState(Array(8).fill(false));
    const [openDescRight,setOpenDescRight]=useState(Array(8).fill(false));
    const toggleOpenDescLeft=(index :number )=>{
        const newOpenDesc=[...openDescLeft]
        newOpenDesc[index]=!newOpenDesc[index]
        setOpenDescLeft(newOpenDesc)
    }
    const toggleOpenDescRight=(index :number )=>{
        const newOpenDesc=[...openDescRight]
        newOpenDesc[index]=!newOpenDesc[index]
        setOpenDescRight(newOpenDesc)
    }
    const CardDateLeft=[
        {
            question:"How Can Programmics help me?",
            description:"Programmics helps you to provide outstanding and exclusive services related to Software technology. Programmics have an excellent team that assists you in creating roadmaps of your business like business goals, cost analysis, key values, target audience, etc. Programmics has excellent and advanced products and services in Web Development, Digital Marketing, Customized Software Development, App Development, and Augmented Reality.",

        },
        {
            question:"How much time will Programmics take for developing an application?",
            description:"Programmics have their well-formulated Innovative model that will request you to procure all the necessary details of the project like your business goals, budget, target users, etc. Based on that, the Programmics team will create a result-oriented mechanism that will help you to deliver the services within a specified timeframe.",

        },
        {
            question:"Can the software be upgraded in the future by Programmics as new technology becomes available?",
            description:"Yes, of course! Programmics always support you and are contented to assist you. More, Importantly, Programmics business strategies help their customers to deliver quality products that are more resilient for the future.",

        },
        {
            question:"Do Programmics provide technical support and maintenance?",
            description:"Programmics are always happy to help you. Yes, Programmics provides technical support and software maintenance if Programmics receive a request from a client.",

        },
    ]
    const CardDateRight=[
        {
            question:"Do I need to be tech-friendly to cooperate with Programmics and order a Customized Software Application?",
            description:"Undoubtedly, You don’t have to be a software development Pro. If you know the software application, Programmics is welcoming your ideas and discuss them in detail. But if you are not aware of software technology, Programmics is here to help you and provide you assistance. Therefore, You will not be worried about the software technology. Programmics help to create a blueprint for the process, guide you, and explain everything regarding Customized software Application.",

        },
        {
            question:"Why should I choose Programmics and not hire my own software development team?",
            description:"Yes. You can have your software development team. However, the recruitment process takes a lot of time because you will be looking for experts that can help you to develop impeccable and reliable products. Also, Maintaining an in-house team would be an expensive option. Programmics is a one-stop solution for all your problems. Thereby, help you to save a lot of time and cost for your company.",

        },
        {
            question:"Do Programmics offer any discount?",
            description:"Programmics aim is to deliver quality products with maximum benefits. Programmics offers products that are 10% economical than the market price.",

        },
        {
            question:"How do we keep ourselves informed about progress?",
            description:"Programmics will send you a regular Project Status Report for your reference. Programmics will keep updating you about the progress so you can have transparency and clarity about project Completion.",

        },
    ]
    return (
        <div className="faq">
            <div className="containerFaq">
                <div className="faq__wrap">
                    <div className="faq__top">
                        <h3>
                        FAQ
                        </h3>
                        <span></span>
                        <div className="faq__desc">
                          <p>
                          This is a list of answers to questions that people frequently ask for Programmics. We are delighted to answer your all questions. Ask us freely.
                          </p>
                        </div>
                    </div>
                    <div className="faq__center">
                        <div className="faq__boxLeft">
                            <div className="faq__faqRow">
                                {CardDateLeft.map((item,index)=>(

                                <div className="faq__card" key={index} onClick={()=>toggleOpenDescLeft(index)}>
                                    <span>
                                        <h4>
                                        <GoPlus/>
                                        {item.question}
                                        </h4>
                                    </span>
                                    <div className={`faq__openDes ${openDescLeft[index] ? 'open':''}`}>
                                        <div className="faq__desc">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                        <div className="faq__boxRight">
                            <div className="faq__faqRow">
                                {CardDateRight.map((item,index)=>(

                                    <div className="faq__card" key={index} onClick={()=>toggleOpenDescRight(index)}>
                                        <span>
                                            <h4>
                                            <GoPlus/>
                                            {item.question}
                                            </h4>
                                        </span>
                                        <div className={`faq__openDes ${openDescRight[index] ? 'open':''}`}>
                                            <div className="faq__desc">
                                                <p>{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Faq