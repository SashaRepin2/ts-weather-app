import React from "react";
import "./styles/index.scss";

import { Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./shared_components/Header/Header";
import Graphic from "./shared_components/Graphic/Graphic";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/month" />
          <Route exact path="/graph" component={Graphic} />
          <Route component={Home} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
