import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cpe from "./layout/cp3_mywork/Project/Cpe";
import Ignition from "./layout/cp3_mywork/Project/Ignition";


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>

          <Route path="/Cpe" element={<Cpe />} />
          <Route path="/Ignition" element={<Ignition />} />

          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
