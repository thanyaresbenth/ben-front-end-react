import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserManagemnet from "./UserManagemnet";
import UserList from "./UserList";
import './UserManagementForm.css';
import './Manu.css';

const Navigation = () => {

    return (
        <nav className="navbar">
            <label>User management</label>

        </nav>
    );
};


function App() {

    return (
        <div className="App">
            <Navigation/>
            <BrowserRouter>
                <Routes>

                    <Route path="/UserManagemnet" element={<UserManagemnet/>}></Route>
                    <Route path="/" element={<UserList/>}></Route>
                    {/*<Route path="/" element={<CreateNewUser/>}></Route>*/}

                    {/*</Route>*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
