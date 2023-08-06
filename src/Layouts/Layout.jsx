import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Footer from "../Pages/Footer";


const Layout = () => {
    return (
        <div className="bg-base-100">
            <Header/>
            <div className="min-h-screen">
                <Outlet/>
            </div><br /> <br /> <br /><br /> <br /> <br />
            <Footer/>
        </div>
    );
};

export default Layout;