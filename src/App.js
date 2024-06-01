import React from "react";
import { Switch, withRouter, Route } from "react-router-dom";

import IndexPage from "./components/IndexPage";
import Scheduler from "./components/Scheduler";
import ConfirmationPage from "./components/ConfirmationPage";
import Patients from "./components/Patients";

class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <IndexPage />} />
        <Route exact path="/scheduler" render={() => <Scheduler />} />
        <Route
          exact
          path="/confirmation-order"
          render={() => <ConfirmationPage />}
        />
        <Route exact path="/patients" render={() => <Patients />} />
      </Switch>
    );
  }
}

export default withRouter(App);
