import React from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class User extends React.Component {

    userDetails=()=>{
        this.props.history.push("/viewuser")
    }
    addUser=()=>{
        this.props.history.push("/adduser")
    }
    viewRes=()=>{
        this.props.history.push("/viewreserv")
    }
    addRes=()=>{
        this.props.history.push("/addreserv")
    }

    book=()=>{
        this.props.history.push("/viewbooking")
    }


    render() {
        return (
            <>
            <div style={{marginLeft:'30%'}}>
                <br/>    <br/>
            <Button variant="secondary" style={{align:'center',width:'700px',height:'75px'}}onClick={this.userDetails}><h3>VIEW USER</h3></Button>{' '}<br/><br/>
            <Button variant="secondary"style={{width:'700px',height:'75px'}} onClick={this.addUser}><h3>ADD USER</h3></Button>{' '}<br/><br/>
            <Button variant="secondary" style={{width:'700px',height:'75px'}}onClick={this.viewRes}><h3>VIEW RESERVATION</h3></Button>{' '}<br/><br/>
            <Button variant="secondary"style={{width:'700px',height:'75px'}} onClick={this.addRes}><h3>BOOK A MOVIE</h3></Button>{' '}<br/><br/>
            <Button variant="secondary"style={{width:'700px',height:'75px'}} onClick={this.book}><h3>VIEW USER BOOKINGS</h3></Button>{' '}<br/><br/>
            

</div>
            </>
        )
    }
}

export default User