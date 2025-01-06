import Hero from "./components/static/sections/Hero";
import Intergration from "./components/static/sections/Intergration";
import Services from "./components/static/sections/Services";
import Proof from "./components/static/sections/Proof";
import Video from "./components/static/sections/Video";
import Achievements from "./components/static/sections/Achievements";
import About from "./components/static/sections/About";
import Partners from "./components/static/sections/Faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <Intergration />
      <Services />
      <Proof />
      <Video />
      <Achievements />
      <About />
      <Partners />
    </>
  );
}
