import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import Mission from "./mission"
import MissionTable from "./missionTable"
import Gallery from "./gallery"
import MisstionLogo from "./missionLogo"
import FooTer from "@/components/footer"
import Banner from "./missionBanner"
import './reponsive.scss'
import '../../components/style/style.scss'
import '../footer/style.scss'
const page=()=>{
    return (
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={'Mission'}/>
            <Mission/>
            <MissionTable/>
            <Gallery/>
            <MisstionLogo/>
            <Banner/>

        </div>
    )
}
export default page