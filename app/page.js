import Footer from "./components/Footer";
import SearchSection from "./components/SerachSection";
import ServicesSection from "./components/ServicesSection";
import WorkingProcess from "./components/WorkingProcess";

export default function Home() {
  return (
    <div>
      <SearchSection />
      <ServicesSection />
      <WorkingProcess />
      <Footer />
    </div>
  );
}
