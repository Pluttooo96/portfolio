import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import './styles/index.css';

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);