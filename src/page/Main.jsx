import TextWrite from "../layout/cp1_textwrite/textwrite"
import Aboutme from "../layout/cp2_Aboutme/Aboutme"
import MyWork from "../layout/cp3_mywork/MyWork"
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "../components/Navbar/MyNavbar";
import { HoverProvider } from "../services/HoverContext";
import Footer from "../layout/footer/Footer";

function Main() {
  return (
    <div>
          <HoverProvider>

            <MyNavbar/>
            <TextWrite/>
            <Aboutme/>
            <MyWork/>
            <Footer/>
            </HoverProvider>

    </div>
  )
}

export default Main
