import React,{Fragment, useState} from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import FAQ from "./FAQ";
import Pricing from "./Pricing";
import CTA from "./CTA";
import Footer from "./Footer";

const Website = () => {
    return<Fragment>
        <Navbar/>
        <HeroSection/>
        <Section1/>
        <Section2/>
        <Section3/>
        <FAQ/>
        <Pricing/>
        <CTA/>
        <Footer/>
    </Fragment>
}

export default Website;