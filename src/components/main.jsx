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
import SingleRequest from "./singleRequest";

const CustomerRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={(props) => (
     rest['userType'] === 'Customer'
       ? <Component {...props} clearLocalStorage={rest['clearLocalStorage']} />
       : <Redirect to={{
         pathname: "/customers/login",
         state: {from: props.location}
       }}/>
   )} />
);

const SupportAgentRoute = ({ component: Component, userType, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest['userType'] === 'Support Agent'
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/support-agents/login",
        state: { from: props.location }
      }} />
  )} />
);

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    localStorage.getItem('isLoggedIn') === "true"
      ? <Component {...props} />
      : <Redirect to={{
        pathname: "/customers/login",
        state: { from: props.location }
      }} />
  )} />
);

const Main = ({ userType, isLoggedIn, clearLocalStorage, updateLocalStorageEntry }) => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact
        path="/customers/login"
        // component={CustomerLogin}
         render={(props) => (
           <CustomerLogin
             {...props}
             isLoggedIn={isLoggedIn}
             updateLocalStorageEntry={updateLocalStorageEntry}
           />
         )}
      />
      <Route exact path="/signup" component={CustomerSignup} />
      <Route exact path="/support-agents/login" component={SupportAgentLogin} />
      <Route exact path="/admins/login" component={AdminLogin} />
      <CustomerRoute
        exact
        path="/create-requests"
        component={CreateRequest}
        userType={userType}
        clearLocalStorage={clearLocalStorage}
      />
      <AuthenticatedRoute exact path="/requests" component={CustomerRequests} userType={userType} />
      <SupportAgentRoute exact path="/support-agents/requests" component={SupportAgentRequests} userType={userType} />
      <AuthenticatedRoute exact path="/requests/:id" component={SingleRequest} userType={userType} />
    </Switch>
  </main>
);

export default Main;
