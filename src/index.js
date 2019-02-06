import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import "./index.css";
import NavContainer from "./containers/NavContainer";
import LeftAsideContainer from "./containers/LeftAsideContainer";
import BodyContainer from "./containers/BodyContainer";
import RightAsideContainer from "./containers/RightAsideContainer";
import FootContainer from "./containers/FootContainer";
import configureStore from './store/configureStore';
import registerServiceWorker from "./registerServiceWorker";

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <React.Fragment>
      <NavContainer/>
      <LeftAsideContainer/>
      <BodyContainer/>
      <RightAsideContainer/>
      <FootContainer/>
    </React.Fragment>
  </Provider>
);

ReactDOM.render(<App/>, document.getElementById("root"));
registerServiceWorker();
