import './App.css'

import {createTheme, ThemeProvider} from "@mui/material/styles";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import Footer from './components/Footer.tsx';

const theme = createTheme({
  typography: {
    fontFamily: "Raleway, sans-serif",
  },
});

function Layout(){
  return(
    <ThemeProvider theme={theme}>
      <Header/>
      <Outlet/>
      <Footer/>
    </ThemeProvider>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      /*
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "*",
        element: <NoPage/>,
      }
      */
    ]
  }
]);

export default function App(){
  return(
    <RouterProvider router={router}/>
  )
}
