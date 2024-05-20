import { Outlet } from "react-router-dom";
import logo from "./logo.svg";

import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />

      <Outlet />

      <Footer />
    </>
  );
}

export default App;
