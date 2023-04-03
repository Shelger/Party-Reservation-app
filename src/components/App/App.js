import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login/Login";
import useToken from "./useToken";
import Homepage from "../Homepage/Homepage";
import Dashboard from "../Company/Dashboard";
import Signup from "../Signup/Signup";
import Process1 from "../Process/Process1/Process1";
import ProcessDate from "../Process/ChoosingDate/ProcessDate";

function App() {
  const { token, setToken } = useToken("");

  return (
    <Router>
      <div className="App">
        {/* <Navbar wetherLogin={token} setToken={setToken} /> */}
        <Switch>
          <Route exact path="/">
            <Homepage token={token} setToken={setToken} />
          </Route>
          <Route path="/company/login">
            <Login setToken={setToken} />
          </Route>
          <Route exact path="/company">
            <Dashboard token={token} />
          </Route>
          <Route path="/company/signup">
            <Signup />
          </Route>
          <Route path="/process/date">
            <ProcessDate token={token} />
          </Route>
          <Route exact path="/process">
            <Process1 token={token} id={1} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
