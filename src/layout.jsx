import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>    
    );
};

export default layout;