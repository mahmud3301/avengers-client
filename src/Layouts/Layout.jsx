import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Footer";
import Header from "../Pages/Header/Header";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("register");
  return (
    <div className="bg-base-100">
      {noHeaderFooter || <Header />}
      <div className="min-h-screen">
        <Outlet />
      </div>
      {noHeaderFooter|| <Footer />}
    </div>
  );
};

export default Layout;
