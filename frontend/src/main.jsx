import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomeScreen from "./screens/HomeScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import RegisterScreen from './screens/RegisterScreen.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
        <Route index={true} path="/" element={<HomeScreen/>}></Route>
        <Route  path="/login" element={<LoginScreen/>}></Route>
        <Route  path="/register" element={<RegisterScreen/>}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
