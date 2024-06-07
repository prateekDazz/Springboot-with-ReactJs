import logo from './logo.svg';
import React  from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './components/Home'
import Course from './components/User';
import './App.css';
import AllCourse from './components/AllUser';
import AddUser from './components/AddUser';
import { Container,Row,Col } from 'reactstrap';
import Menu from './components/Menu';
import  {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import AllUser from './components/AllUser';
function App() {

  const notify = () => toast.info("confirmed",{position:'top-left'});
  return (
    <div className="App">
      <Router>
      <ToastContainer position="top-center"
      theme="light"/>
<Container>
<Header></Header>
<Row>

  <Col md={4}>

    <Menu></Menu>
  </Col>

  <Col md={8}>
<Routes>  
<Route path='/' Component={Home} exact></Route>
<Route path='/add-user' Component={AddUser} exact></Route>
<Route path='/view-user' Component={AllUser} exact></Route>
<Route path='/updateuser/:id' Component={AddUser} exact></Route>

</Routes>

  </Col>
</Row>

</Container>

      </Router>
     
    
    </div>
  );
}

export default App;
