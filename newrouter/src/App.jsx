import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Contacts from "./components/Contacts";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css";
/*Part of protected route, note the authcontextprovider wrapper below*/
import { AuthContextProvider } from "./context/AuthContext";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";

const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        {/* navbar above switch but within browserrouter keeps it on all pages*/}
        <Navbar />
        <Switch>
          {/* <Route exact path="/">
            <Home />
          </Route> */}

          {/*another way */}
          <Route exact path="/" component={Home} />

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <PrivateRoute2 component={Admin} path="/admin"></PrivateRoute2>

          {/* <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute> */}

          {/* For the simple if statement
        <Route path="/admin">
          <Admin />
        </Route> */}
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};

export default App;
