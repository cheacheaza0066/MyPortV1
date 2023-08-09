import Navcompo from "../components/Navbar/Navcompo"
import TextWrite from "../layout/cp1_textwrite/textwrite"
import Aboutme from "../layout/cp2_Aboutme/Aboutme"
import './Main.css'
function Main() {
  return (
    <div>
        <Navcompo/>
        <TextWrite/>
        <Aboutme/>
    </div>
  )
}

export default Main
