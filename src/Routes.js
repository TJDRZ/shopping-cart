import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Shop from "./components/Shop";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
