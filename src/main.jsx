import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import PageProject from './components/PageProject/PageProject.jsx'
import Home from "./components/Home/Home.jsx";

import "./styles/index.scss";
import "./styles/_reset.scss";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} /*errorElement={<Error />}*/>
      {/* <Route errorElement={<Error />}> */}
      <Route index element={<Home />} />
      <Route path="/projet/:id" element={<PageProject />} />
      {/* </Route> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </React.StrictMode>,
);
