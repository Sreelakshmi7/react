import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addUserToDb } from "../redux/action/user.action";
import {  editUser, updateUser } from "../redux/action/user.action";

class AddUser extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            userid: this.props.editData.userid?this.props.editData.userid:"",
            user_name: this.props.editData.user_name?this.props.editData.user_name:"",
            mobilenum: this.props.editData.mobilenum?this.props.editData.mobilenum:"",

        }
    }
    saveData = () => {

        this.props.addUsertoDb({ userid: this.state.userid, user_name: this.state.user_name, mobilenum: this.state.mobilenum })
    }

    editData = () => {

        this.props.editUser(this.state,this.props.editData.userid)
        console.log(this.state)
        this.props.updateUser({})
        setTimeout(()=>{
            this.props.history.push('/viewuser')
           },100)
        }
    
    render() {

        let { editData } = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <br /><br />
                <h5>USER ID</h5> <input type="text" value={this.state.userid}onChange={(event) => this.setState({ userid: event.target.value })} />{this.state.userid} <br /><br />
                <h5>USER NAME</h5> <input type="text"value={this.state.user_name} onChange={(event) => this.setState({ user_name: event.target.value })} />{this.state.user_name} <br /><br />
               <h5> MOBILE NUMBER</h5> <input type="text"value={this.state.mobilenum} onChange={(event) => this.setState({ mobilenum: event.target.value })} />{this.state.mobilenum}<br /><br />

                {



                    editData.userid ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>


                }
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

        addUsertoDb: bindActionCreators(addUserToDb, dispatch),
        editUser: bindActionCreators(editUser, dispatch),
        updateUser: bindActionCreators(updateUser, dispatch)

    }
}

const mapStateToProps = (state) => {
    return {

        editData: state.userProject.editData
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser)
