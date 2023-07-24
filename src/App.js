import React from "react";
import "./App.css";
import Index from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Index />
      </div>
    </Provider>
  );
}

export default App;
