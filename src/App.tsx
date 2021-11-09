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
        <Route path="/" component={Home} />
        <Route path="/month" />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
