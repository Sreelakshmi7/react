import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { addProjectToDb, editScreen, updateScreen } from "../redux/action/theatre.action";
import { getLanguage } from "../redux/action/lang.action"
import { getGenere } from "../redux/action/lang.action"
import { getShow } from "../redux/action/lang.action"

class AddProject extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            movie_id: this.props.editData.movie_id?this.props.editData.movie_id:"",
            screen_num: this.props.editData.screen_num?this.props.editData.screen_num:"",
            movie_name: this.props.editData.movie_name?this.props.editData.movie_name:"",
            language: this.props.editData.language?this.props.editData.language:"",
            genere: this.props.editData.genere?this.props.editData.genere:"",
            movie_duration: this.props.editData.movie_duration?this.props.editData.movie_duration:"",
            show_time: this.props.editData.show_time?this.props.editData.show_time:"",
            price: this.props.editData.price?this.props.editData.price:"",
            totalnumofseats: this.props.editData.totalnumofseats?this.props.editData.totalnumofseats:"",
        }
        this.props.getlang()
        this.props.getGen()
        this.props.getSh()
    }

    saveData = () => {

        this.props.addprojecttoDb({ movie_id: this.state.movie_id, screen_num: this.state.screen_num, movie_name: this.state.movie_name, language: this.state.language, genere: this.state.genere, movie_duration: this.state.movie_duration, show_time: this.state.show_time, price: this.state.price, totalnumofseats: this.state.totalnumofseats })
    }

    editData = () => {

        this.props.editScreen(this.state, this.props.editData.screen_num)
        console.log(this.state)
        this.props.updateScreen({})
        setTimeout(()=>{
            this.props.history.push('/viewmovie')
           },100)
        }
      

    render() {
        let { projectlangCollection } = this.props
        let { projectgenereCollection } = this.props
        let { projectshowCollection } = this.props
        let { editData}=this.props
        return (
            <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                <br /> 
                <h5>MOVIE ID </h5><input type="text" value={this.state.movie_id}onChange={(event) => this.setState({ movie_id: event.target.value })} />{this.state.movie_id} <br /> 
                <h5>SCREEN NUMBER </h5><input type="text" value={this.state.screen_num}onChange={(event) => this.setState({ screen_num: event.target.value })} />{this.state.screen_num} <br /> 
                <h5>MOVIE NAME </h5><input type="text"value={this.state.movie_name} onChange={(event) => this.setState({ movie_name: event.target.value })} />{this.state.movie_name}<br />
                LANGUAGE <select name="langProject" value={this.state.language}onChange={(event) => this.setState({ language: event.target.value })}>
                    {
                        projectlangCollection.map(res => (
                            <option value={res.lang_id} >{res.lang}</option>
                        )
                        )
                    }
                </select>{this.state.language}<br />
                <h5>MOVIE GENERE </h5> <select name="genereProject" value={this.state.genere}onChange={(event) => this.setState({ genere: event.target.value })}>
                    {
                        projectgenereCollection.map(res => (
                            <option value={res.gen_id} >{res.gen}</option>
                        )
                        )
                    }</select>{this.state.genere}<br />
               <h5> MOVIE DURATION </h5><input type="text"value={this.state.movie_duration} onChange={(event) => this.setState({ movie_duration: event.target.value })} />{this.state.movie_duration}<br />
               <h5>SHOW TIME </h5>
                <select name="showProject" value={this.props.show_time}onChange={(event) => this.setState({ show_time: event.target.value })}>
                    {
                        projectshowCollection.map(res => (
                            <option value={res.show_id} >{res.show_tim}</option>
                        )
                        )
                    }</select>

                {this.state.show_time} <br />
                <h5>PRICE </h5> < input type="text" value={this.state.price}onChange={(event) => this.setState({ price: event.target.value })
                } />{this.state.price}<br />
                <h5>TOTAL NUMBER OF SEATS </h5>< input type="text" value={this.state.totalnumofseats}onChange={(event) => this.setState({ totalnumofseats: event.target.value })} />{this.state.totalnumofseats}<br />


                {

                    editData.screen_num ? <button onClick={this.editData}>Update</button> : <button onClick={this.saveData}>save</button>


                }

            </div >
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {

        addprojecttoDb: bindActionCreators(addProjectToDb, dispatch),
        getlang: bindActionCreators(getLanguage, dispatch),
        getGen: bindActionCreators(getGenere, dispatch),
        getSh: bindActionCreators(getShow, dispatch),
        editScreen: bindActionCreators(editScreen, dispatch),
        updateScreen: bindActionCreators(updateScreen, dispatch)

    }
}


const mapStateToProps = (state) => {
    return {
        projectlangCollection: state.langProject,
        projectgenereCollection: state.genereProject,
        projectshowCollection: state.showProject,

        editData: state.project.editData

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProject)
