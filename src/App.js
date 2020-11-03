import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavMenu from "./components/menu/Menu";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import AboutMe from "./components/about/AboutMe";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <NavMenu />
        <Route path="/" exact>
          <Home />
        </Route>
        <div className="container">
          <Route path="/blog" exact>
            <h1 className="mt-4">Blog</h1>
            <Blog />
          </Route>
          <Route path="/about-me" exact>
            <AboutMe />
          </Route>
        </div>
      </div>
    </Router>
  );
}
