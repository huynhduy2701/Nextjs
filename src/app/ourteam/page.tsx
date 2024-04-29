import TitlePage from "@/components/titlepage";
import NavBarMenu from "../navbar/navbar";
import Blog from "./blog";
import BanerHelp from "./banerHelp";
import FooTer from "../../components/footer";
import './reponsive.scss'
import '../../components/style/style.scss'
const OurTeam = () => {
  return (
    <div>
      {/* <NavBarMenu /> */}
      <TitlePage message={"Our Team "} />
      <Blog />
      <BanerHelp />
    </div>
  );
};
export default OurTeam;
