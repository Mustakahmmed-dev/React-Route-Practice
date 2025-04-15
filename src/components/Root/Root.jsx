import { Outlet } from "react-router";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Root = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        
        <Footer></Footer>
        </>
    )
}

export default Root;