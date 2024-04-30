import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import BusinissWeAre from "./businesWeAre"

import '../../components/style/style.scss'
import TeamProgrammic from "./teamProgrammic"
import ServiceAbout from "./serviceAbout"
import RaipurHelp from "@/components/raipurHelp"
import '../../components/style/RaipurHelp.scss'
import './reponsive.scss'
const page=()=>{
    return (
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={'About '}/>
            <BusinissWeAre/>
            <TeamProgrammic/>
            <ServiceAbout/>
            <RaipurHelp/>
        </div>
    )
}
export default page