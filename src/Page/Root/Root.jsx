import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";

const Root = () => {
  return (
    <section className="max-w-6xl mx-auto ">
      <NavBar />
      <Outlet/>
      <Footer />
    </section>
  );
};

export default Root;
