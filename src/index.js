import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage'
import NewsPage from './pages/NewsPage';
import BlindspotsPage from './pages/BlindspotsPage';
import ErrorPage from './pages/ErrorPage';
import AdminPage from './pages/AdminPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/article/:id',
    element: <ArticlePage />
  },
  {
    path: 'news',
    element: <NewsPage />
  },
  {
    path: 'blindspots',
    element: <BlindspotsPage />
  },
  {
    path: 'admin',
    element: <AdminPage />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);