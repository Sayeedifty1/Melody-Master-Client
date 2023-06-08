import React from 'react'
import ReactDOM from 'react-dom/client'
const queryClient = new QueryClient()

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import router from './Routes/routes';
import AuthProvider from './Providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
