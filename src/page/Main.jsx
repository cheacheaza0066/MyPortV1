// import Navcomponents from "../components/Navbar/Navcomponents"
import NavBarComponents from "../components/Navbar/Navcomponents"
import TextWrite from "../layout/cp1_textwrite/textwrite"
import Aboutme from "../layout/cp2_Aboutme/Aboutme"
import MyWork from "../layout/cp3_mywork/MyWork"
import './Main.css'
function Main() {
  return (
    <div>
        <NavBarComponents/>
        <TextWrite/>
        <Aboutme/>
        <MyWork/>
    </div>
  )
}

export default Main
