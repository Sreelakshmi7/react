import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getBook} from "../redux/action/booking.action";
import Table from 'react-bootstrap/Table';


class ViewBook extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
             userid:""
            
        }
    }
    getData = () => {
        this.props.getBook(this.state.userid)
    }

    render() {
        let { bookCollection } = this.props
        return (
            <div align="center">
                <div>
                <br />
                    <h5>USER ID</h5><input type="text" onChange={(event) => this.setState({ userid: event.target.value })} />{this.state.userid} <br />
                    
                   
                    <button onClick={this.getData}>GET</button>
                </div>
                <br></br>
            <br></br>
                <Table striped bordered hover variant="secondary" align="center" style={{width:"50%"}}>
                    <thead>
                    <tr>
                        <th>MOVIE ID</th>
                        <th>MOVIE NAME</th>
                        <th>USER ID</th>
                        <th>USER NAME</th>
                        <th>RESERV ID</th>
                        <th>NUM OF SEATS</th>
                        <th>MOVIE DATE</th>
                        <th>STATUS</th>
                  
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bookCollection.map(res => (
                            <tr>
                                <td>{res.movie_id}</td>
                                <td>{res.movie_name}</td>
                                <td>{res.user_id}</td>
                                <td>{res.user_name}</td>
                                <td>{res.reserv_id}</td>
                                <td>{res.num_of_seats}</td>
                                <td>{res.movie_date}</td>
                                <td>{res.bookstatus}</td>

                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        bookCollection:state.bookProject
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        getBook: bindActionCreators(getBook, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewBook)