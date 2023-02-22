import "./App.scss";
import React, { useEffect, useState } from "react";
import TrendingPage from "./page/TrendingPage";
import HomePage from "./page/HomePage";
import Book from "./page/Book";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import axios from "axios";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/trending",
        element: <TrendingPage />,
      },
      {
        path: "/book/:id",
        element: <Book />,
      },
    ],
  },
]);

function App() {
  const [bookData, setBookData] = useState([]);

  const trending = "https://openlibrary.org/trending/daily.json";

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    try {
      axios.get(trending).then((response) => {
        setBookData(response.data.works);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      
        <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
