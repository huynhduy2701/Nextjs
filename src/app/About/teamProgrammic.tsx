'use client'
import { useState } from 'react';
import './style.scss'
import { GoPlus } from "react-icons/go";
const TeamProgrammic =()=>{
    // Sử dụng một mảng state để lưu trữ trạng thái của từng card
    const [openDesc, setOpenDesc] = useState(Array(3).fill(false));
    // Hàm toggleOpenDesc sẽ nhận index của card và thay đổi trạng thái của card đó
    const toggleOpenDesc = (index :number) => {
        const newOpenDesc = [...openDesc];
        newOpenDesc[index] = !newOpenDesc[index];
        setOpenDesc(newOpenDesc);
    };
    const CardData=[
        {
             question:"what does Programmics stand for?",
             description:"Programmics, Raipur provides you the latest technology and services that are ongoing demand of the market in Web Development, Digital Marketing, Customized Software Development, App Development, and Augmented Reality Field. Programmics provide the services which are best suited for our customers so that they grow their business by leaps and bounds. The services and technology that are provided by Programmics use the latest and updated versions. In web development, Programmics, Raipur helps to create and build a fully responsive and mobile-friendly website. In digital marketing, Programmics provides you an SEO optimized website to reach your customers organically. In software development and app development, Programmics has high-quality and versatile tech software that helps create applications according to your requirements. In Augmented Reality, Programmics, Raipur has integrated virtual enhancements with real-world objects. Programmics has achieved proficiency in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development. If you are looking for a one-stop solution, Programmics, Raipur is the perfect destination that provides the best and versatile services."
        },
        {
            question:"How Programmics Work with Clients?",
            description:" aims to deliver the services that meet the prolific market demands and needs of our customers. Therefore, Programmics clients are always satisfied and contented with our Software products and services. Programmics follow a synergetic team approach that allows Programmics to create a differential change across India. Programmics offer valued products and core services in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development. So that our clients will get all the Software products and services on a single platform. Programmics digital services help the clients to explore all the products that are well-suited for their business growth. Programmics, Raipur have achieved expertise in all the Software Services and products, therefore Programmics understand the customer’s point of view and provide result-oriented services."
       },
       {
        question:"what are Programmics Key Skills?",
        description:"Programmics, Raipur provides you the latest technology and services that are ongoing demand of the market in Web Development, Digital Marketing, Customized Software Development, App Development, and Augmented Reality Field. Programmics provide the services which are best suited for our customers so that they grow their business by leaps and bounds. The services and technology that are provided by Programmics use the latest and updated versions. In web development, Programmics, Raipur helps to create and build a fully responsive and mobile-friendly website. In digital marketing, Programmics provides you an SEO optimized website to reach your customers organically. In software development and app development, Programmics has high-quality and versatile tech software that helps create applications according to your requirements. In Augmented Reality, Programmics, Raipur has integrated virtual enhancements with real-world objects. Programmics has achieved proficiency in Web development, Digital Marketing, Customized Software development, Augmented reality, App development, Magneto Development, and e-commerce app development. If you are looking for a one-stop solution, Programmics, Raipur is the perfect destination that provides the best and versatile services."
   },
    ]
    return (
        <div className="teamProgrammic">
            <div className='containerABout'>
                <div className='teamProgrammic__wrap'>
                    <div className='teamProgrammic__card'>
                        <div className='teamProgrammic__teamProgrammicTop'>
                            <h3>
                            About Programmics 
                            </h3>
                            <span></span>
                            <div className='teamProgrammic_desc'>
                                <p>Programmics adore you to understand us more.</p>
                            </div>
                        </div>
                        <div className='teamProgrammic__teamProgrammicCenter'>
                            <div className='teamProgrammic__box' >
                               {/* Sử dụng map để render các card và truyền index vào toggleOpenDesc */}
                               {CardData.map((item,index)=>(

                                    <div className='teamProgrammic__rowCard' key={index} onClick={() => toggleOpenDesc(index)}>
                                        <div className='teamProgrammic__wrapper'>
                                            <span>
                                                <h4><GoPlus />{item.question}</h4>
                                            </span>
                                            <div className={`teamProgrammic__open ${openDesc[index] ? 'open' : ''}`}>
                                                <p>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                               ))}
                                

                            </div>
                        </div>
                        <div className='teamProgrammic__teamProgrammicBottom'>
                            <div className='teamProgrammic__contentDesc'>
                                <h2>Belief Of Team Programmics</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TeamProgrammic