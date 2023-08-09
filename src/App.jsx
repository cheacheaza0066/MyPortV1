import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
