import NavBar from "@/components/navBar"
import NavBarMenu from "../navbar/navbar"
import CarouselNav from "@/components/carousel"
import TitlePage from "@/components/titlepage"
import Pricing from "./pricing"
import '../../components/style/style.scss'
import Faq from "./faq"
const page =()=>{
    return(
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={'Pricing And Plans'}/>
            <Pricing/>
            <Faq/>
        </div>
    )
}
export default page