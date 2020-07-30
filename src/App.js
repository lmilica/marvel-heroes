import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./components/Home/Home";
import { Info } from "./components/Info/Info";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/info/:id" component={Info} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
