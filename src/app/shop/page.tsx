import NavBarMenu from "../navbar/navbar"
import '../../components/style/style.scss'
import TitlePage from "@/components/titlepage"
import Shop from "./shop"
import '../../components/style/style.scss'
const page =()=>{
    return (
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={"Shop"}/>
            <Shop/>
        </div>
    )
}
export default page