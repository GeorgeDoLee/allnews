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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);