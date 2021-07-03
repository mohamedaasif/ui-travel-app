import "./App.css";
import HeaderBanner from "./components/HeaderBanner/HeaderBanner";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import WelcomePage from "./components/WelcomePage";
import WeatherChannel from "./components/WeatherChannel";
import FeaturedDestinations from "./components/FeaturedDestinations";
import PromoContent from "./components/PromoContent";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HeaderBanner />
      <NavigationBar />
      <WelcomePage />
      <WeatherChannel />
      <FeaturedDestinations />
      <PromoContent />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
