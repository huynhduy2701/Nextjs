import TitlePage from "@/components/titlepage"
import NavBarMenu from "../navbar/navbar"
import '../../components/style/style.scss'
import FormContact from "./form"
const page=()=>{
    return (
        <div>
            {/* <NavBarMenu/> */}
            <TitlePage message={'Contacts'}/>
            <FormContact/>
        </div>
    )
}
export default page