"use client"
import "./style/style.scss";
import Image from "next/image";
import { Carousel } from "antd";
import img2 from "../../public/assets/imgpeople.png";
import img1 from "../../public/assets/cungtay.png";
import './style/reponsive.scss'
const CarouselNav =()=>{
    // const contentStyle: React.CSSProperties = {
    //     // height: "160px",
    //     color: "#fff",
    //     lineHeight: "160px",
    //     textAlign: "start",
    //     // padding: "20px",
    //     // background: "#364d79",
    //     position: "absolute",
    //     zIndex: "99",
    //     top:"0",
    //     left:"18%",
    //     transform: "translateX(-27%) translateY(228%)",
    //     textTransform: "uppercase",
    //     fontWeight:"900",
    //     fontSize:"40px"
      
    //   };
    //   const contentStyleTwo :React.CSSProperties={
    //     color: "#fff",
    //     fontFamily:"Raleway",
    //     position: "absolute",
    //     zIndex: "99",
    //     top:"0",
    //     left:"18%",
    //     transform: "translateX(-27%) translateY(265%)",
    //     lineHeight: "160px",
    //     textAlign: "start",
    //     fontSize:"35px",
    //     fontWeight:"300",
    
    //   }
    const contentStyle: React.CSSProperties = {
      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
    };
   return (
    <div>
         {/* <Carousel autoplay className="carousel">
            <div  style={{ position: "relative" }}>
              <Image src={img1} alt="anh1"></Image>
              <h3 className="TextAuto animate" style={contentStyle}>19789797787 aAaaAAaA</h3>
                <h5 style={contentStyleTwo} className="animate">aaaaaaaaaaasldkjaljsdla</h5>
                <div className="CaroselButton animate">
                    <div className="CaroselButton__Button ">
                        <span>Read More</span>
                    </div>
                </div>
           </div>
          </Carousel> */} 
          <Carousel autoplay className="carousel">
    <div>
          <Image src={img1} alt="logo"/>
    </div>
    <div>
    <Image src={img2} alt="logo"/>
    </div>
  
  </Carousel>

    </div>
   )
}
export default CarouselNav;