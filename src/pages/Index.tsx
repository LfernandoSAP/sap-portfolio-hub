import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import SapModules from "@/components/SapModules";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Certifications />
      <SapModules />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
