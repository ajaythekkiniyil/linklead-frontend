import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchSection from "./components/SerachSection";
import ServicesSection from "./components/ServicesSection";
import WorkingProcess from "./components/WorkingProcess";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchSection />
      <ServicesSection />
      <WorkingProcess />
      <Footer />
    </div>
  );
}
