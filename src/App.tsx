import React from "react";
import "./styles/index.scss";

import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./shared_components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/month" exact />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
