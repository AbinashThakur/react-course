import React, { useState } from 'react'
import './App.css';
import About from './About';
import Contact from './Contact';
import Users from './Users'
import CreateUser from './CreateUser'
import Home from './Home'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

function App() {
  // const [name,setName]=useState("Abinash")
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">NewUsers</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
            <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/list">User List</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link to="/create">Create User</Link></Nav.Link>
          </Nav>
        </Navbar>
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/create">
            <CreateUser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        
        {/* <h1>Home page</h1> */}
        {/* <About name={name}/> */}
        {/* <button onClick={()=>setName("Abinash Thakur")}>Update Props</button> */}
        {/* <Contact name={name}/> */}
        {/* <Contact/> */}
        {/* <Users/> */}
        {/* <CreateUser /> */}
      </Router>
    </div>
  );
}

export default App;
