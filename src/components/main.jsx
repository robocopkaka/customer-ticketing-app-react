import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomerLogin from "./customers/login";
import SupportAgentLogin from "./support_agents/login";
import AdminLogin from "./admins/login";
import Home from "./home";
import CustomerSignup from "./customers/signup";
import CreateRequest from "./customers/createRequest";
import CustomerRequests from "./customers/requests";
import SupportAgentRequests from "./support_agents/requests";

const CustomerRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
     localStorage.getItem('userType') === 'cust'
       ? <Component {...props} />
       : <Redirect to={{
         pathname: "/customers/login",
         state: { from: props.location }
       }} />
   )} />
);

const SupportAgentRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('userType') === 'supp'
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/support-agents/login",
        state: { from: props.location }
      }} />
  )} />
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers/login" component={CustomerLogin} />
      <Route exact path="/signup" component={CustomerSignup} />
      <Route exact path="/support-agents/login" component={SupportAgentLogin} />
      <Route exact path="/admins/login" component={AdminLogin} />
      <CustomerRoute exact path="/create-requests" component={CreateRequest} />
      <CustomerRoute exact path="/fetch-requests" component={CustomerRequests} />
      <SupportAgentRoute exact path="/support-agents/requests" component={SupportAgentRequests} />
    </Switch>
  </main>
);

export default Main;
