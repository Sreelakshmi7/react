import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getReserv } from "../redux/action/reserv.action";
import{deletereserv,updateRes} from "../redux/action/reserv.action";
import Table from 'react-bootstrap/Table';
class ViewReserv extends React.Component {
    constructor(props) {
        super(props)
        this.props.getReservData()
    }
    editData=(id)=>{

        this.data=this.props.reservCollection[id]
        this.props.updateRes(this.data)
        this.props.history.push('/addreserv')
    }


    del=(id)=>{
        this.props.delreser(id);
        setTimeout(()=>{
            this.props.getReservData()
        },200)
    }
    render() {
        let { reservCollection } = this.props
        return (
            <>

         <br></br>
            <br></br>
                <Table striped bordered hover variant="secondary" align="center" style={{width:"50%"}}>
                    <thead>
                    
                    <tr>
                        <th>MOVIE ID</th>
                        <th>USER ID</th>
                        <th>RESERV ID</th>
                        <th>NUMBER OF SEATS</th>
                        <th>MOVIE DATE</th>
                        <th>STATUS</th>
                        <th></th>
                    
                        <th></th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        reservCollection.map((res,key)=> (
                            <tr>
                                <td>{res.movie_id}</td>
                                <td>{res.user_id}</td>
                                <td>{res.reserv_id}</td>
                                <td>{res.num_of_seats}</td>
                                <td>{res.movie_date}</td>
                                <td>{res.user_id}</td>
                                <td>{res.bookstatus}</td>
                                
                                <td><button onClick={()=>this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.del(res.reserv_id)}>delete</button></td>
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
        reservCollection: state.reservProject.reservProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getReservData: bindActionCreators(getReserv, dispatch),
        updateRes: bindActionCreators(updateRes, dispatch),
        delreser: bindActionCreators(deletereserv, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewReserv)