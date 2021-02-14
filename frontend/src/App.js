// import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import ProfileTemplate from './ProfileTemplate/ProfileTemplate';
import UpdateProfile from './UpdateProfile/UpdateProfile';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import $ from 'jquery';
// import Popper from 'popper.js';


function App() {
  return (
    <div className="App">
      <UpdateProfile userId="One1sd4sd"/>
      <br/><hr/><br/>
      <ProfileTemplate/>
    </div>
  );
}

export default App;
