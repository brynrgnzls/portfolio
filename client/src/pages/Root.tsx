import AboutMe from "../components/AboutMe";
import Cover from "../components/Cover";
import Footer from "../components/Footer";
import MouseTexttInput from "../components/MouseTextInput";
import Nav from "../components/Navbar";
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";
import Particles from "../components/Particles";
import BroadcastCursors from "../components/BroadcastCursors";

export default function Root() {
  return (
    <div className="relative overflow-x-hidden max-sm:pb-16">
      <MouseTexttInput />
      <Particles />
      <Nav />
      <Cover />
      <AboutMe />
      <Timeline />
      <Skills />
      <Footer />
      <BroadcastCursors />
    </div>
  );
}
