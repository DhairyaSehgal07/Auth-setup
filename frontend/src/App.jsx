import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Header />
      <div className="my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
