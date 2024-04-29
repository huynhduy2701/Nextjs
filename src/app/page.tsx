// import Image from "next/image";

import Testimonials from "@/components/Testimonials";
import BackgroundHover from "@/components/backgroundHover";
import Blog from "@/components/blog";
import CarouselNav from "@/components/carousel";
import CaseStudies from "@/components/caseStu";
import Custom from "@/components/custom";
import FooTer from "@/components/footer";
import NavBar from "@/components/navBar";
import Programmics from "@/components/programmics";
import RaipurHelp from "@/components/raipurHelp";
import SiteContent from "@/components/siteContent";
import SoftwareProducts from "@/components/softwareProducts";

export default function page() {
  return (
  <div>
    {/* <NavBar/> */}
    <CarouselNav/>
    <SiteContent/>
    <CaseStudies/>
    <BackgroundHover/>
    <Custom/>
    <Programmics/>
    <Testimonials/>
    <SoftwareProducts/>
    <Blog/>
    <RaipurHelp/>
    {/* <FooTer/> */}
  </div>
  );
}
