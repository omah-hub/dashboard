import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appRouter from "./config/routes";
import './index.css'
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { ToastContainer } from 'react-toastify';

const routes = createBrowserRouter(appRouter());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={routes} />
    </Provider>
  </React.StrictMode>
);
