import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import BannerProgram from "./bannerProgammic"
import ProgrammicsProducts from "./programmicProducts"
import '../../components/style/style.scss'
import ProductBusiness from "./programmicBusiness"
import Statistical from "./statistical"
import CaseStudies from "@/components/caseStu"
import '../../components/style/case.scss'
import CaseStudy from "./caseStudy"
import '../navbar/style.scss'
const ChooseProgammics = ()=>{
    return (
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={'Why Choose Programmics'} />
            <BannerProgram/>
            <ProgrammicsProducts/>
            <ProductBusiness/>
            <Statistical/>
            <CaseStudy/>
        </div>
    )
}
export default ChooseProgammics