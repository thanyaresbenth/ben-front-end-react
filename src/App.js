import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserManagemnet from "./UserManagemnet";
import UserList from "./UserList";
import CreateNewUser from "./CreateNewUser";
import './UserManagementForm.css';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
           <Route path="/UserManagemnet" element={<UserManagemnet/>}></Route>
           <Route path="/user-list" element={<UserList/>}></Route>
           <Route path="/create-new-user" element={<CreateNewUser/>}></Route>



         {/*</Route>*/}
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
