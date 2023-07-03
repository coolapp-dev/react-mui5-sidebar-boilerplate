import logo from '../../logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";



const MainLayout = ()=> {
    return (
        <div className="App">
            <div className="App-header" >
                <Outlet />
            </div>
        </div>
    );
  }



export default MainLayout