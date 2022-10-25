import "./Style.css";
import Footer from "../../components/Footer";
import ChooseUs from "./chooseUs";
import CrazyGallery from "./gallery";



function About() {
  return (
    <div>
      <section className="about" id="about">
         <ChooseUs/>
         <hr className="divider-hr" />
         <CrazyGallery/>
      </section>
      <Footer />
    </div>
  );
}

export default About;
