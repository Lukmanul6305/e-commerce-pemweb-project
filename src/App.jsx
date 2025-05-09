// import { Routes, Route } from "react-router-dom";

// import NavbarComponent from "./components/NavbarComponents";
// import FooterComponent from "./components/FooterComponent";

// import HomePage from "./pages/HomePage";
// import KelasPage from "./pages/KelasPage";
// import TestimoniPage from "./pages/TestimoniPage";
// import FaqPage from "./pages/FaqPage";
// import SyaratPage from "./pages/SyaratPage";
// import Pembelajaran from "./pages/PembelajaranPage";

// function App() {
//   return (
//     <div>
//       <NavbarComponent />

//       <Routes>
//         <Route path="/" Component={HomePage}></Route>
//         <Route path="/kelas" Component={KelasPage}></Route>
//         <Route path="/testimoni" Component={TestimoniPage}></Route>
//         <Route path="/faq" Component={FaqPage}></Route>
//         <Route path="/syarat" Component={SyaratPage}></Route>
//         <Route path="/PembelajaranPage" Component={Pembelajaran}></Route>
//       </Routes>

//       <FooterComponent />
//     </div>
//   );
// }

// export default App;
import { Routes, Route, useLocation } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponents";
import FooterComponent from "./components/FooterComponent";

import LoginForm from "./components/LoginForm";
import Dashboard from "./pages/Dashbord";

import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimoniPage from "./pages/TestimoniPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";
import Pembelajaran from "./pages/PembelajaranPage";

function App() {
  const location = useLocation();
  const hideNavFooter = location.pathname === "/PembelajaranPage";

  return (
    <div>
      {!hideNavFooter && <NavbarComponent />}

      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/kelas" Component={KelasPage}></Route>
        <Route path="/testimoni" Component={TestimoniPage}></Route>
        <Route path="/faq" Component={FaqPage}></Route>
        <Route path="/syarat" Component={SyaratPage}></Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {<FooterComponent />}
    </div>
  );
}

export default App;
