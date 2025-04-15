import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <>
        <Header></Header>
        {isNavigating && <span>Loading...</span>}
        <Outlet></Outlet>
        
        <Footer></Footer>
        </>
    )
}

export default Root;