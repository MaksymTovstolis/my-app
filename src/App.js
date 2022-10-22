import React from "react";
import './App.css';
import Dialogs from "./components/Dialogs/Dialogs";
import Content from "./components/Content/Content";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header"
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";




const App = () => {
  let routes = useRoutes([
    { path: "dialogs", element:  <Dialogs /> },
    { path: "profile", element: <Content /> },
    { path: "music", element: <Music />},
    { path: "news", element: <News />},
    { path: "settings", element: <Settings />},
  ]);
  

  
  return (
  <div className="app-wrapper">
    <Header />
    <Nav />
    {routes}
  </div>
  )
 
};

const AppWrapper = () => {
  return (
      <Router>    
        <App />
      </Router>
  );
};

export default AppWrapper;