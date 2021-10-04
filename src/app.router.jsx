import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/header';
// import Footer from './components/footer';
import AddProject from './components/addmovie';
import ViewProject from './components/viewmovie';
import { Provider } from 'react-redux';
import { store } from "./redux/store/store";
// import  NotFound  from "./components/core/notfound";
import AddUser from "./components/adduser";
import ViewUser from "./components/viewuser";
import AddReserv from "./components/addreserv";
import ViewReserv from "./components/viewreserv";
import ViewBook from "./components/viewbooking";
import home from "./components/core/home";
import User from "./components/core/user";

const AppRouter = (
    <Provider store={store}>
        <Router>
            <Header></Header>
            <Switch>
                <Route path="/addmovie" component={AddProject} />
                <Route path="/viewmovie" component={ViewProject} />
                <Route path="/adduser" component={AddUser} />
                <Route path="/viewuser" component={ViewUser} />
                <Route path="/addreserv" component={AddReserv} />
                <Route path="/viewreserv" component={ViewReserv} />
                <Route path="/viewbooking" component={ ViewBook} />
                <Route exact path="/" component={home}/>
                <Route path="/user" component={User} />
                {/* <Route exact component={NotFound}/> */}
            </Switch>
           
        </Router>
    </Provider>
)

export default AppRouter