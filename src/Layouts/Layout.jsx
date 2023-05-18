import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const Layout = () => {
    return (
        <div className="bg-[#000]">
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;