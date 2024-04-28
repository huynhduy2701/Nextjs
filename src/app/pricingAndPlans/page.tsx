import NavBar from "@/components/navBar"
import NavBarMenu from "../navbar/navbar"
import CarouselNav from "@/components/carousel"
import TitlePage from "@/components/titlepage"
import Pricing from "./pricing"

const PricingAndPlans =()=>{
    return(
        <div>
            <NavBarMenu/>
            <TitlePage message={'Pricing And Plans'}/>
            <Pricing/>
        </div>
    )
}
export default PricingAndPlans