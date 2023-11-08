// import { useState } from "react";
// import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Blog } from "./pages/blog";
import { Post } from "./pages/post";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/blog/:slug" element={<Post />}></Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
