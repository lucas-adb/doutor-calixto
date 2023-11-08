import { About } from "../components/About";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Testimonial } from "../components/Testimonial";

export function Home() {
  return (
    <>   
    <Hero />
    <About />
    <Services />
    <Testimonial />
    </>
  );
}
