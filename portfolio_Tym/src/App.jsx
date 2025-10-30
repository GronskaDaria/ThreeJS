import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperiensSection from "./sections/ExperiensSection.jsx";
import TeckStack from "./sections/TeckStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";

const App = () => {
    return (
       <>
           <NavBar/>
           <Hero />
           <ShowcaseSection/>
           <LogoSection/>
           <FeatureCards/>
           <ExperiensSection/>
           <TeckStack/>
           <Testimonials/>
           <Contact/>
       </>
    )
}
export default App
