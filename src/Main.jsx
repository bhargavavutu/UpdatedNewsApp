import React from 'react';
import ReactDOM from 'react-dom';

// var {browserHistory,hashHistory,Route,Router,IndexRoute} = require('react-router-dom');

import {
    BrowserRouter as Router,Routes,
    Route
  } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import Dashboard from './Components/dashboardComponent';
import About from './Components/AboutComponent';
import Navbar from './Components/NavbarComponent';
import HomeComponent from './Components/HomeComponent'
import Plane from './Components/GetPlaneDetails';
class MainComponent extends React.Component {
    render() {
        return(
          <div></div>
        )
    }
}

ReactDOM.render(
    <Router  history={createBrowserHistory}>
          <Navbar />
        <Routes>
        {/* <IndexRoute component={dashboardComponent}></IndexRoute> */}
        <Route path = "/" component={Dashboard} element= {<Dashboard />}></Route>
        <Route path = "/About" component={About} element= {<About />}></Route>
        <Route path = "/home" component= {HomeComponent} element= {<HomeComponent />}></Route>
        <Route path="/getplanes" component = {Plane} element={<Plane />}></Route>
        </Routes>
    </Router>,document.getElementById('content')
);

export default MainComponent;