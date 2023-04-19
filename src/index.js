import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home';
import Main from './components/Main';
import { Routes, Route, useParams } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/main+startDate=:startDate+endDate=:endDate",
//     render: () => <Main startDate = {startDate} endDate = {endDate}/>,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes >
      <Route path='/' element = {<Home />}>
      </Route>
      <Route path='/main' element = {<Main />}>

      </Route>
    </Routes>
  </BrowserRouter>
  // <RouterProvider router={router} />
);

