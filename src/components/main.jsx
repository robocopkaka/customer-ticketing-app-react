import React from "react";
import { Switch, Route } from 'react-router-dom';
import CustomerLogin from "./customers/login";
import SupportAgentLogin from "./support_agents/login";
import AdminLogin from "./admins/login";
import Home from "./home";
import CustomerSignup from "./customers/signup";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers/login" component={CustomerLogin} />
      <Route exact path="/signup" component={CustomerSignup} />
      <Route exact path="/support_agents/login" component={SupportAgentLogin} />
      <Route exact path="/admins/login" component={AdminLogin} />
    </Switch>
  </main>
);

export default Main;
