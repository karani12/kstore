import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Pages/Home';
import ViewProduct from './Pages/product/ViewProduct';
const queryClient = new QueryClient()



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ViewProduct />} />
      </Routes>

      </BrowserRouter>
      </QueryClientProvider>

  );
}

export default App;
