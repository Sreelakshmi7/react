import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getUser, updateUser } from "../redux/action/user.action";
import{deleteuser} from"../redux/action/user.action";
import Table from 'react-bootstrap/Table';

class ViewUser extends React.Component {
    constructor(props) {
        super(props)
        this.props.getuserData()
    }

    editData=(id)=>{

        this.data=this.props. userCollection[id]
        this.props.updateUser(this.data)
        this.props.history.push('/adduser')
    }

    deleteus=(id)=>{
        this.props. deluser(id);
        setTimeout(()=>{
            this.props.getuserData()
        },200)
    }
    render() {
        let { userCollection } = this.props
        return (
            <>
            
<br></br>
            <br></br>
                <Table striped bordered hover variant="secondary" align="center" style={{width:"50%"}}>
                    <thead>
                    <tr>
                        <th>USER ID</th>
                        <th>USER NAME</th>
                        <th>MOBILE NUMBER</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>

                    
                    {
                        userCollection.map((res,key) => (
                            <tr>
                                <td>{res.userid}</td>
                                <td>{res.user_name}</td>
                                <td>{res.mobilenum}</td>
                                <td><button onClick={()=>this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deleteus(res.userid)}>delete</button></td>
                                
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userCollection: state.userProject.userProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getuserData: bindActionCreators(getUser, dispatch),
        updateUser: bindActionCreators(updateUser, dispatch),
        deluser: bindActionCreators(deleteuser, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)