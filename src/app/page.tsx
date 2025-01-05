import Image from "next/image";
import Hero from "./components/static/sections/Hero";
import Intergration from "./components/static/sections/Intergration";
import Services from "./components/static/sections/Services";
import Proof from "./components/static/sections/Proof";
import Video from "./components/static/sections/Video";

export default function Home() {
  return (
    <>
      <Hero />
      <Intergration />
      <Services />
      <Proof />
      <Video />
    </>
  );
}
