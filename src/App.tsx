import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <RouterProvider router={BrowserRouter}>
    </RouterProvider>
  );
}

export default App;
