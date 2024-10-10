import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

const theme = createTheme({
  /** Put your mantine theme override here */
});


createRoot(document.getElementById('root')).render(
  <MantineProvider theme={theme}>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </MantineProvider>
)
