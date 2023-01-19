import React from 'react';
import './App.css';
import {Navigate, Route,Routes} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Contactlist from "./components/contacts/contactlist/contactlist";
import Addcontact from "./components/contacts/addcontact/addcontact";
import Mycontext from './context';



function App() {
  return (
    <React.Fragment>
      	<Navbar/>
        <Mycontext>
          <Routes>

            <Route path={'/'} element={<Navigate to={"/contacts/list"}/>}/>
            <Route path={'/contacts/list'} element={<Contactlist/>}/>
            <Route path={'/contacts/add'} element={<Addcontact/>}/>
          </Routes>
        </Mycontext>
    </React.Fragment>
  );
}

export default App;
