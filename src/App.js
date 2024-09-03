import About from "./assets/components/About/About";
import Asortiment from "./assets/components/Asortiment/Asortiment";
import Contacts from "./assets/components/Contacts/Contacts";
import Footer from "./assets/components/Footer/Footer";
import Header from "./assets/components/Header/Header";
import Map from "./assets/components/Map/Map";
import Services from "./assets/components/Services/Services";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <About />
      <hr className="hr" />
      <Asortiment />
      <hr className="hr" />
      <Services />

      <Contacts />
      <Map />
   <hr className="hr" />
      <Footer />
    </div>
  );
}

export default App;
