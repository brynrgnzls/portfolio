import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import MouseTexttInput from "../components/MouseTextInput";
import Nav from "../components/Navbar";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function Root() {
  return (
    <div className="max-sm:pb-16">
      <MouseTexttInput />
      {/* <Particles /> */}
      <Nav />
      <Cover />
      <AboutMe />
      <Timeline />
      <Skills />
      <Footer />
    </div>
  );
}
