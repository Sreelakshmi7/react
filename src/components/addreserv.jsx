import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addReserv } from "../redux/action/reserv.action";
import { editRes, updateRes } from "../redux/action/reserv.action";

class AddReserv extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            movie_id:  this.props.editData.movie_id?this.props.editData.movie_id:"",
            user_id:  this.props.editData.user_id?this.props.editData.user_id:"",
            reserv_id:  this.props.editData.reserv_id?this.props.editData.reserv_id:"",
            num_of_seats:  this.props.editData.num_of_seats?this.props.editData.num_of_seats:"",
            movie_date:  this.props.editData.movie_date?this.props.editData.movie_date:""
            

        }
    }
    saveData = () => {

        this.props.addReserv({ movie_id: this.state.movie_id, user_id: this.state.user_id, reserv_id: this.state.reserv_id, num_of_seats: this.state.num_of_seats, movie_date: this.state.movie_date, status: this.state.status })
    }
    editData = () => {

        this.props.editRes(this.state, this.props.editData.movie_id)
        console.log(this.state)
        this.props.updateRes({})
       setTimeout(()=>{
        this.props.history.push('/viewreserv')
       },100)
    }



    render() {
        let { editData } = this.props;
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <br/>
                <h5>MOVIE ID</h5> <input type="text" value={this.state.movie_id}onChange={(event) => this.setState({ movie_id: event.target.value })} />{this.state.movie_id} <br /><br />
                <h5>USER ID</h5><input type="text" value={this.state.user_id}onChange={(event) => this.setState({ user_id: event.target.value })} />{this.state.user_id} <br /><br />
                <h5>RESERVATION ID</h5> <input type="text"value={this.state.reserv_id} onChange={(event) => this.setState({ reserv_id: event.target.value })} />{this.state.reserv_id}<br /><br />
                <h5>  NUMBER OF SEATS</h5><input type="text"value={this.state.num_of_seats} onChange={(event) => this.setState({ num_of_seats: event.target.value })} />{this.state.num_of_seats}<br /><br />
                <h5>MOVIE DATE</h5><input type="date"value={this.state.movie_date} onChange={(event) => this.setState({ movie_date: event.target.value })} />{this.state.movie_date}<br /><br />
               
                {



                    editData.reserv_id ? <button onClick={this.editData}>Cancel</button> : <button onClick={this.saveData}>Book</button>


                }
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

        addReserv: bindActionCreators(addReserv, dispatch),
        editRes: bindActionCreators(editRes, dispatch),
        updateRes: bindActionCreators(updateRes, dispatch)
    }
}
const mapStateToProps = (state) => {
    return {

        editData: state.reservProject.editData
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddReserv)
