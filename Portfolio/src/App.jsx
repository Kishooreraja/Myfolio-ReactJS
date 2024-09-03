import "./App.css";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import AddTech from "./components/AddTech";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Projects/>
      <Technologies/>
      <AddTech/>
      <AboutMe/>
      <Footer/>
    </>
  );
}

export default App;
