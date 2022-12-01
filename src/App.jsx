import "./App.css";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { NavBar } from "./component/navBar";
import { Home } from "./pages/home";
import { Destination } from "./pages/destination";
import { Crew } from "./pages/crew";
import { Technology } from "./pages/technology";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination" element={<Destination />}></Route>
          <Route path="/crew" element={<Crew />}></Route>
          <Route path="/technology" element={<Technology />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
