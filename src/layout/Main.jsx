import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigations";
import { Grid} from "@mui/material";
import Footer from "../components/Footer/Footer";
import DarkenScreen from "../components/DarkenScreen/DarkenScreen";


function Main () {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <DarkenScreen/>
         <Navigation/>
         <Grid container style={{ flex: 1, paddingBottom: '60px', }} >
         <Outlet/>
        
        </Grid>
        <Footer/>
        </div>
        
    )
}

export default Main;