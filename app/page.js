import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import SearchSection from "./components/SerachSection";
import ServicesSection from "./components/ServicesSection";
import SignUpPage from "./components/SignUpPage";
import WorkingProcess from "./components/WorkingProcess";
import PostBusinessSection from "./components/PostBusinessSection";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchSection />
      <ServicesSection />
      <WorkingProcess />
      <Footer />
      <LoginPage />
      <SignUpPage />
      <PostBusinessSection />
    </div>
  );
}
