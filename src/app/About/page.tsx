import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import BusinissWeAre from "./businesWeAre"

import '../../components/style/style.scss'
const page=()=>{
    return (
        <div>
            <NavBarMenu/>
            <TitlePage message={'About '}/>
            <BusinissWeAre/>

        </div>
    )
}
export default page