'use client'
import { useState } from 'react';
import './style.scss';
import { BiSolidQuoteRight } from "react-icons/bi";
import './reponsive.scss'
const Banner = () => {
  const [activeTab, setActiveTab] = useState('Industry');
  const [openBanner,setOpenBanner]=useState<number | null>(null)
  const handleTabClick = (tab:string) => {
    setActiveTab(tab);
  }
  const [content,setContent]=useState([
    {
        menuItem:'Industry',
        titleHead:"0 Businesses today cross borders and regions, so you need a service provider that goes where",
        description:"0 Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it."
    },
    {
        menuItem:'Mission',
        titleHead:"1 Businesses today cross borders and regions, so you need a service provider that goes where",
        description:"1 Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it."
    },
    {
        menuItem:'Careers',
        titleHead:"2 Businesses today cross borders and regions, so you need a service provider that goes where",
        description:"2 Our team of talented, experienced and motivated industry specialists will be recognised as the best in their field. Our continued success will be driven by our people who will share in it."
    },
  ])

  const toggleBanner=(index :number )=>{
    console.log("active banner");
    setOpenBanner((prevIndex) => (prevIndex === index ? null : index));
  }


  return (
    <div className='bannerContainer'>
      <div className="container">
        <div className="banner">
          <div className="banner_wrap">
            <div className='banner_box'>
              <div className='banner_card'>
              </div>
              <div className='banner_card'>
                <div className='banner_wrapper'>
                  <div className='banner_title'>
                  {content.map((item,index)=>(
                     <p
                     className={activeTab === `${item.menuItem}` ? 'active' : ''}
                     onClick={() => handleTabClick(`${item.menuItem}`)} key={index}
                   >
                     {item.menuItem}
                   </p>
                  ))}
                  </div>
                  <div className='banner_boxText'>
                    <div className='banner_containerBaner'>
                      <div className='banner_textTop'>
                        <div className='banner_icon'>
                          <BiSolidQuoteRight />
                        </div>
                        <div className='banner_textHead'>
                          <p>{(content.find(item => item.menuItem === activeTab) || {})?.titleHead}</p>
                        </div>
                      </div>
                      <div className='banner_bottom'>
                        <p>{(content.find(item => item.menuItem === activeTab) || {})?.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='boxMobile'>
                <div className='boxMobile_wrap'>
                    <div className='boxMobile_box'>
                      {
                        content.map((item,index)=>(
                          <div className='boxMobile_cardItem' key={index}>
                          <p onClick={()=>toggleBanner(index)}>{item.menuItem}</p>
                          <div className={`boxMobile_openContent ${openBanner ===index ? 'header_open':''}  `}>
                            <div className='banner_textTop'>
                              <div className='banner_icon'>
                                <BiSolidQuoteRight />
                              </div>
                              <div className='banner_textHead'>
                                <p>{item.titleHead}</p>
                              </div>
                          </div>
                            <div className='banner_bottom'>
                              <p>{item.description}</p>
                            </div>
                          </div>
                      </div>  
                        ))
                      }
                        
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner