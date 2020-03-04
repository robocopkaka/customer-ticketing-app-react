import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import CustomerLogin from "./customers/login";
import SupportAgentLogin from "./support_agents/login";
import AdminLogin from "./admins/login";
import Home from "./home";
import CustomerSignup from "./customers/signup";
import CreateRequest from "./customers/createRequest";

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

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/customers/login" component={CustomerLogin} />
      <Route exact path="/signup" component={CustomerSignup} />
      <Route exact path="/support_agents/login" component={SupportAgentLogin} />
      <Route exact path="/admins/login" component={AdminLogin} />
      <CustomerRoute exact path="/create-requests" component={CreateRequest} />
    </Switch>
  </main>
);

export default Main;
