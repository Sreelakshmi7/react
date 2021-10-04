import React from "react"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProject } from "../redux/action/theatre.action";
import {deletemovie,updateScreen} from "../redux/action/theatre.action";
import Table from 'react-bootstrap/Table';
class ViewProject extends React.Component {
    constructor(props) {
        super(props)
        this.props.getmovieData()
    }

    editData=(id)=>{

        this.data=this.props. movieCollection[id]
        this.props.updateScreen(this.data)
        this.props.history.push('/addmovie')
    }


    deleteData=(id)=>{
        this.props. delmovie(id);
        setTimeout(()=>{
            this.props.getmovieData()
        },200)
    }
    render() {
        let { movieCollection } = this.props
        return (
            <>
            <br></br>
            <br></br>
                <Table striped bordered hover variant="secondary" align="center" style={{width:"50%"}}>
                    <thead>
                    <tr>

                        <th>MOVIE ID</th>
                        <th>SCREEN NUMBER</th>
                        <th>MOVIE NAME</th>
                        <th>LANGUAGE</th>
                        <th>GENERE</th>
                        <th>MOVIE DURATION</th>
                        <th>SHOW TIME</th>
                        <th>PRICE</th>
                        <th>TOTAL NUMBER OF SEATS</th>
                        <th></th>
                        <th></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {
                        movieCollection.map((res,key)=> (
                            <tr>
                                <td>{res.movie_id}</td>
                                <td>{res.screen_num}</td>
                                <td>{res.movie_name}</td>
                                <td>{res.lang}</td>
                                <td>{res.gen}</td>
                                <td>{res.movie_duration}</td>
                                <td>{res.show_tim}</td>
                                <td>{res.price}</td>
                                <td>{res.totalnumofseats}</td>

                                <td><button onClick={()=>this.editData(key)}>edit</button></td>
                                <td><button onClick={()=>this.deleteData(res.movie_id)}>delete</button></td>
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
        movieCollection: state.project.project
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getmovieData: bindActionCreators(getProject,dispatch),
        updateScreen: bindActionCreators(updateScreen, dispatch),
        delmovie:bindActionCreators(deletemovie,dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewProject)