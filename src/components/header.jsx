import React from "react"
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
class Header extends React.Component{
    render(){
        return(
            <>
                <div>
                    <h1 style={{backgroundColor:"maroon",color:"white",textAlign:"center",fontSize:"50px"}}><b>BOOK MY MOVIE</b> </h1>
                   
                   <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home"><Link to="/" style={{color:'white',textDecoration:"none"}}>HOME</Link></Navbar.Brand>
    <Navbar.Brand href="#home"><Link to="/addmovie" style={{color:'white',textDecoration:"none"}}>ADD TO MOVIE LIST</Link></Navbar.Brand>
    <Nav className="me-auto">
    <Navbar.Brand href="#home"><Link to="/viewmovie" style={{color:'white',textDecoration:"none"}}>VIEW TO MOVIE LIST</Link></Navbar.Brand>
    <Navbar.Brand href="#home"><Link to="/user" style={{color:'white',textDecoration:"none"}}>USER</Link></Navbar.Brand>
    </Nav>
    </Container>
  </Navbar>
              </div>
            </>
        )
    }
}
export default Header