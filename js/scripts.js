import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, HashHistory} from "react-router";

import Layout from "./components/Layout";

import Agenda from "./pages/agenda";
import Berichten from "./pages/berichten";
import Home from "./pages/home";
import Instellingen from "./pages/instellingen";

const app = document.getElementById('app');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="agenda" component={Agenda}></Route>
      <Route path="berichten" component={Berichten}></Route>
      <Route path="instellingen" component={Instellingen}></Route>
    </Route>
  </Router>,
app);
