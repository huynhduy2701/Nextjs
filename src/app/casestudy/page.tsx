import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import Paragraph from "./paragraph"
import './reponsive.scss'
import '../../components/style/style.scss'
const CaseStudy=()=>{
    return (
        <div>
            <NavBarMenu/>
            <TitlePage message={"Case Study"}/>
            <Paragraph/>
        </div>
    )
}
export default CaseStudy